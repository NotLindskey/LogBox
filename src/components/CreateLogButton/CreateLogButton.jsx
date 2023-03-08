import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import CreateLogForm from '../CreateLogForm/CreateLogForm';

function CreateLogButton() {
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
      <button onClick={() => setShowModal(true)}>Create Log</button>
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

export default CreateLogButton;
