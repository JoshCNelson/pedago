import React from 'react';

import './EventDetailHeader.css';

const EventDetailHeader = () => {
  return (
    <div
      className="header"
      style={{
        backgroundImage: "url('./event.jpg')",
        backgroundSize: "cover",
        height: "250px",
        borderRadius: "inherit"
      }}>
      <div style={{
        position: "absolute",
        bottom: "61%",
        left: "5%",
        zIndex: "1"
      }}>
        <h1>The Tech Interactive, San Jose</h1>
        <p>San Jose Meetup</p>
      </div>
    </div>
  );
}

export default EventDetailHeader;