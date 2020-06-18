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
    <div
      style={{ position: "relative" }}
      className="modal">
      <div
        onClick={onClick}
        style={{
          color: "white",
          position: "absolute",
          right: "10px",
          top: "10px",
          padding: "10px",
          cursor: "pointer"
        }}
      > X</div>
      <EventDetailHeader />
      <div>Date & Time</div>
      <div>Description</div>
      <div>Location</div>
      <div>Map</div>
      <EventDetailFooter />
    </div >
  );
}

export default EventDetailModal;
      // src="https://via.placeholder.com/350x250.png/09f/fff" />