import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './EventDetailModal.css';

import EventDetailFooter from './EventDetailFooter.js';
import EventDetailHeader from './EventDetailHeader.js';
// NOTE ADD PROP TYPES

const EventDetailModal = (props) => {

  // NOTE: In a production-level app I would not advocate
  // stashing all the incoming data into one data object
  // however I will do so here for the sake of brevity
  const [data, setData] = useState({});
  const [readMore, setReadMore] = useState(false);

  const fetchData = async () => {
    const response = await axios.get('https://www.mocky.io/v2/5d3752f1310000fc74b0788d')

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
          <p>Wednesday, August 28</p>
          <p>5:00 PM - 7:00 PM PST</p>
        </div>
        <div>
          <h2>Description</h2>
          <p>{data.description}</p>
          <p
            className="read-more"
            onClick={() => { setReadMore(!readMore) }}
          >Read More</p>
        </div>
        <div>
          <h2>Location</h2>
          <p>The Tech Interactive</p>
          <p>201 S Market St</p>
          <p>San Jose, CA 95113</p>
          <p
            className="get-directions">
            Get Directions
          </p>
        </div>
      </div>
      <EventDetailFooter />
    </div >
  );
}

export default EventDetailModal;
      // src="https://via.placeholder.com/350x250.png/09f/fff" />