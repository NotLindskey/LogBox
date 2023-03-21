import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import CreateLogForm from '../CreateLogForm/CreateLogForm';
import './CreateLogButton.css';

function createLogButton() {
  const history = useHistory();
  const [showModal, setShowModal] = useState(false);

  function closeModal() {
    if (confirm('Would you like to discard your entry?')) {
      history.push('/home');
      setShowModal(false);
    }
  }

  return (
    <>
      <button className="createButton" onClick={() => setShowModal(true)}>
        Create Entry
      </button>
      {showModal && (
        <div className="modal">
          <div className="modal-create-container">
            <div className="modal--create-log-content">
              <CreateLogForm />
              <button onClick={closeModal}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default createLogButton;
