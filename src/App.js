import React, { useState } from 'react';
import './reset.css';
import './app.css'

import EventDetailModal from './EventDetailModal';

function App() {
  const [modalOpen, setModalOpen] = useState(true);

  const onClick = () => { setModalOpen(!modalOpen) }

  return (
    <div className="container">
      <div className="wrapper">
        {
          modalOpen ?
            <EventDetailModal
              onClick={setModalOpen}
            />
            :
            <button onClick={onClick}>View Event</button>
        }
      </div>
    </div>
  );
}

export default App;
