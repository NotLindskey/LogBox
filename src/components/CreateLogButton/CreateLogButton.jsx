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
      <button
        id="createButton"
        className="btn btn_sizeSm"
        onClick={() => setShowModal(true)}
      >
        Create Log
      </button>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <CreateLogForm />
            <button onClick={closeModal}>Cancel</button>
          </div>
        </div>
      )}
    </>
  );
}

export default createLogButton;
