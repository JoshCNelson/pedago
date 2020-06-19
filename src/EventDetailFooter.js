import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { string } from 'prop-types';

import './EventDetailFooter.css';

const EventDetailFooter = ({ url }) => {
  return (
    <div className="footer">
      <a href={url}>
        <div>
          <span>RSVP</span>
          <FaExternalLinkAlt />
        </div>
      </a>
    </div>
  );
}

EventDetailFooter.propTypes = { url: string };

export default EventDetailFooter;