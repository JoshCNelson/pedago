import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const EventDetailFooter = (props) => {
  return (
    <div className="footer">
      <a href={props.url}>
        <div>
          <span>RSVP</span>
          <FaExternalLinkAlt />
        </div>
      </a>
    </div>
  );
}

export default EventDetailFooter;