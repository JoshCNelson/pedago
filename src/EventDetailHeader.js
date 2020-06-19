import React from 'react';
import { string } from 'prop-types';

import './EventDetailHeader.css';

const EventDetailHeader = ({
  eventName,
  image,
  locale,
  locationName
}) => {
  return (
    <div
      className="header"
      style={{ backgroundImage: `url(${image})` }}>
      <div>
        <h1>{locationName}, {locale}</h1>
        <p>{eventName}</p>
      </div>
    </div>
  );
}

EventDetailHeader.propTypes = {
  eventName: string,
  image: string,
  locale: string,
  locationName: string,
};

export default EventDetailHeader;