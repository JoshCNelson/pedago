import React, { useState } from 'react';
import EventDetailModal from './EventDetailModal';

import './reset.css';
import './app.css'


function App() {
  const [modalOpen, setModalOpen] = useState(true);

  const onClick = () => { setModalOpen(!modalOpen) }

  return (
    <div className="container">
      <div className="wrapper">
        {
          modalOpen ?
            <EventDetailModal onClick={setModalOpen} />
            :
            <button onClick={onClick}>View Event</button>
        }
      </div>
    </div>
  );
}

export default App;
