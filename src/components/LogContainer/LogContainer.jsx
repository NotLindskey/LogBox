import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './LogContainer.css';

function LogContainer() {
  const dispatch = useDispatch();
  const history = useHistory();
  const log = useSelector((store) => store.log);
  const [showModal, setShowModal] = useState(false);
  const [logId, setLogId] = useState(null);

  useEffect(() => {
    dispatch({ type: 'FETCH_LOG' });
  }, [dispatch]);

  const openEditModal = (logId) => {
    console.log('edit button clicked!');
  };

  const openDeleteModal = (logId) => {
    setLogId(logId);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const deleteLog = () => {
    dispatch({ type: 'DELETE_LOG', payload: logId });
    setShowModal(false);
    history.push('/home');
  };

  return (
    <div className="log-container">
      {log.length > 0 ? (
        <section>
          {log.map((log) => (
            <div className="individual-logs" key={log.id}>
              <div className="individual-logs-content">
                <p>Title: {log.title}</p>
                <p>Date: {new Date(log.date).toISOString().substring(0, 10)}</p>
                <p>Entry: {log.entry}</p>
                <div>
                  <button onClick={() => openDeleteModal(log.id)}>
                    Delete
                  </button>
                </div>
                <div>
                  <button onClick={() => openEditModal()}>Edit</button>
                </div>
              </div>
            </div>
          ))}
        </section>
      ) : null}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Would you like to delete this log?</h3>
            <div className="modal-delete-text-content">
              <p>Title: {log.find((log) => log.id === logId).title}</p>
              <p>
                {new Date(log.find((log) => log.id === logId).date)
                  .toISOString()
                  .substring(0, 10)}
              </p>
              <p>Entry: {log.find((log) => log.id === logId).entry}</p>
            </div>
            <div>
              <button onClick={() => deleteLog()}>Delete</button>
              <button onClick={() => closeModal()}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LogContainer;
