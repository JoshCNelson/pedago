import React, { useEffect } from 'react';
import './EventDetailModal.css';

import EventDetailFooter from './EventDetailFooter.js';
import EventDetailHeader from './EventDetailHeader.js';
// NOTE ADD PROP TYPES

const EventDetailModal = (props) => {

  useEffect(() => {
    console.log("I hath been opened! Make an axios request")
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
      <EventDetailHeader />
      <div className="details">
        <div>
          <h2>Date & Time</h2>
          <p>Wednesday, August 28</p>
          <p>5:00 PM - 7:00 PM PST</p>
        </div>
        <div>
          <h2>Description</h2>
          <p>A long desc goes here. It should cut..</p>
          <p>Read More</p>
        </div>
        <div>
          <h2>Location</h2>
          <p>The Tech Interactive</p>
          <p>201 S Market St</p>
          <p>San Jose, CA 95113</p>
          <p>Get Directions</p>
        </div>
      </div>
      <EventDetailFooter />
    </div >
  );
}

export default EventDetailModal;
      // src="https://via.placeholder.com/350x250.png/09f/fff" />