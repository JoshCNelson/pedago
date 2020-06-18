import React from 'react';
import { string } from 'prop-types';

const EventDetailHeader = (props) => {
  return (
    <div
      className="header"
      style={{
        backgroundImage: `url(${props.image})`,
      }}>
      <div>
        <h1>{props.locationName}, {props.locale}</h1>
        <p>{props.eventName}</p>
      </div>
    </div>
  );
}

EventDetailHeader.propTypes = {
  eventName: string,
  image: string,
  locale: string,
  locationName: string,
}

export default EventDetailHeader;