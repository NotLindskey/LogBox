import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import EditLogEntry from '../EditLogEntry/EditLogEntry';

function editLogButton() {
  const history = useHistory();
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    if (confirm('Data will not be saved, ok to cancel?')) {
      setShowModal(false);
    }
  };

  return (
    <div>
      <div>
        <button onClick={() => setShowModal(true)}>Edit Log</button>
        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <EditLogEntry />
              <button onClick={closeModal}>Cancel</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default editLogButton;
