import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { string } from 'prop-types';

import './EventDetailFooter.css';

// NOTE: I intentionally did not use a button element
// for the footer because using a button for the purpose
// of navigating to another page is an accessibility violation
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