import React, { useEffect, useState } from 'react';
import EventDetailFooter from './EventDetailFooter.js';
import EventDetailHeader from './EventDetailHeader.js';

import { MdClose } from 'react-icons/md';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

import axios from 'axios';
import { format } from 'date-fns';
import { func } from 'prop-types';

import './EventDetailModal.css';

const EventDetailModal = (props) => {

  // NOTE: In a production-level app I would not advocate
  // stashing all the incoming data into one data object
  // however I will do so here for the sake of brevity
  const [data, setData] = useState({});
  const [readMore, setReadMore] = useState(false);

  const fetchData = async () => {
    // NOTE: If this were a larger app I would advocate for
    // wrapping axios in a clientApi wrapper to abstract
    // request details away
    const response = await axios.get('https://www.mocky.io/v2/5d3752f1310000fc74b0788d');

    setData(response.data);
  }

  // NOTE: My assumption here is that we will fetch the data
  // when we press the button as opposed to pre-loading
  // the data before we click in to see the event details
  useEffect(() => {
    fetchData();
  }, [])

  const onClick = () => {
    props.onClick();
  }

  const getDateAndTime = () => {
    return (
      <>
        <p>{startDate()}</p>
        <p>{startEndTime()}</p>
      </>
    );
  }

  const getDescription = () => {
    return (
      <>
        <p>{description()}</p>
        <p
          className="read-more"
          onClick={() => { setReadMore(!readMore) }}>
          Read More
        </p>
      </>
    );
  }

  const startDate = () => {
    if (!data.startDate) { return 'Loading...' }

    const dateFormat = "iiii', 'LLLL' 'dd"
    return format(new Date(data.startDate), dateFormat);
  }

  const startEndTime = () => {
    if (!data.startDate || !data.endDate) { return 'Loading...' }

    const dateFormat = 'p';
    const startTime = format(new Date(data.startDate), dateFormat);
    const endTime = format(new Date(data.endDate), dateFormat);

    // NOTE: It was unclear if/how the timezone was to be derived so I hardcoded it.
    // One possible solution with the current api data would be to use the location data
    // and hit the Google Maps Timezone API to get the appropriate timezone
    return `${startTime} - ${endTime} PST`;
  }

  const description = () => {
    if (!data.description) { return 'Loading...' }

    if (readMore) { return data.description; }

    return `${data.description.substring(0, 47)}...`;
  }

  const getLocation = () => {
    if (!data.location) { return 'Loading...' }

    const {
      addressCountry,
      addressLocality,
      addressRegion,
      name,
      postalCode,
      streetAddress
    } = data.location.address;

    const { latitude, longitude } = data.location.geo;
    const position = [latitude, longitude];

    const encodedAddress = encodeURI(`${streetAddress} ${addressLocality} ${addressRegion} ${postalCode} ${addressCountry}`);

    return (
      <>
        <p>{data.location.name}</p>
        <p>{streetAddress}</p>
        <p>{`${addressLocality} ${addressRegion} ${postalCode}`}</p>
        <a
          href={`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`} >
          <p
            className="get-directions">
            Get Directions
        </p >
        </a >
        <Map
          style={{ height: "120px", marginTop: "10px" }}
          center={position}
          zoom={10}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position} />
        </Map>
      </>
    );
  }

  return (
    <div className="modal">
      <div
        className="close"
        onClick={onClick}>
        <MdClose />
      </div>
      <EventDetailHeader
        eventName={data.name}
        image={data.image}
        locale={data.location ? data.location.address.addressLocality : 'LOADING'}
        locationName={data.location ? data.location.name : 'LOADING'} />
      <div className="details">
        <div>
          <h2>Date & Time</h2>
          {getDateAndTime()}
        </div>
        <div>
          <h2>Description</h2>
          {getDescription()}

        </div>
        <div>
          <h2>Location</h2>
          {getLocation()}
        </div>
      </div>
      <EventDetailFooter url={data.offers ? data.offers.url : '#'} />
    </div >
  );
}

EventDetailModal.propTypes = { onClick: func.isRequired };

export default EventDetailModal;