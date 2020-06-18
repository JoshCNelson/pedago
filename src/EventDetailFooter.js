import React from 'react';

const EventDetailFooter = () => {
  return (
    <div className="footer">
      <button
        onSubmit={() => { console.log('hello') }}
      >RSVP</button>
    </div>
  );
}

export default EventDetailFooter;