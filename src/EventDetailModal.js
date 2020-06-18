import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './EventDetailModal.css';

import EventDetailFooter from './EventDetailFooter.js';
import EventDetailHeader from './EventDetailHeader.js';
// NOTE ADD PROP TYPES

import { format } from 'date-fns';

const EventDetailModal = (props) => {

  // NOTE: In a production-level app I would not advocate
  // stashing all the incoming data into one data object
  // however I will do so here for the sake of brevity
  const [data, setData] = useState({});
  const [readMore, setReadMore] = useState(false);

  const fetchData = async () => {
    const response = await axios.get('https://www.mocky.io/v2/5d3752f1310000fc74b0788d')

    console.log(format(new Date("2019-08-28T17:00"), 'iiii'));

    console.log(response.data);
    setData(response.data);
  }

  // NOTE: My assumption here is that we will fetch the data
  // when we press the button as opposed to preloading
  // the data before we click into see the event details
  useEffect(() => {
    fetchData();
  }, [])

  const onClick = () => {
    props.onClick();
  }

  const startDate = () => {
    if (!data.startDate) { return 'Loading...' }

    const dateFormat = "iiii', 'LLLL' 'dd"
    return format(new Date(data.startDate), dateFormat);
  }

  const startEndTime = () => {
    if (!data.startDate || !data.endDate) { return 'Loading...' }

    const startDateFormat = 'p';
    const startTime = format(new Date(data.startDate), startDateFormat);

    const endDateFormat = 'p';
    const endTime = format(new Date(data.endDate), endDateFormat);

    return `${startTime} - ${endTime} ADD LATER`;
  }

  const description = () => {
    if (!data.description) { return 'Loading...' }

    if (readMore) {
      return data.description;
    }

    return `${data.description.substring(0, 47)}...`;
  }

  const location = () => {
    if (!data.location) { return 'Loading...' }

    return (
      <>
        <h2>Location</h2>
        <p>{data.location.name}</p>
        <p>201 S Market St</p>
        <p>San Jose, CA 95113</p>
        <p
          className="get-directions">
          Get Directions
        </p>
      </>
    )
  }

  return (
    <div className="modal">
      <div
        className="close"
        onClick={onClick}>
        X
      </div>
      <EventDetailHeader
        eventName={data.name}

        // in a production-level app I would advocate
        // for a loading image fallback
        image={data.image}
        locale={data.location ? data.location.address.addressLocality : 'LOADING'}
        locationName={data.location ? data.location.name : 'LOADING'} />
      <div className="details">
        <div>
          <h2>Date & Time</h2>
          <p>{startDate()}</p>
          <p>{startEndTime()}</p>
        </div>
        <div>
          <h2>Description</h2>
          <p>{description()}</p>
          <p
            className="read-more"
            onClick={() => { setReadMore(!readMore) }}
          >Read More</p>
        </div>
        <div>
          {location()}
        </div>
      </div>
      <EventDetailFooter />
    </div >
  );
}

export default EventDetailModal;
      // src="https://via.placeholder.com/350x250.png/09f/fff" />