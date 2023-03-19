import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './LogContainer.css';

import EditLogEntry from '../EditLogEntry/EditLogEntry';

function LogContainer() {
  const dispatch = useDispatch();
  const history = useHistory();
  const log = useSelector((store) => store.log);
  const [showModal, setShowModal] = useState(false);
  const [logId, setLogId] = useState(null);

  // keep track of log that is selected for editing
  const [selectedLog, setSelectedLog] = useState(null);

  useEffect(() => {
    dispatch({ type: 'FETCH_LOG' });
  }, [dispatch]);

  const openEditModal = (log) => {
    setSelectedLog(log);
    setShowModal(true);
  };

  const openDeleteModal = (logId) => {
    setLogId(logId);
    setShowModal(true);
  };

  const deleteLog = () => {
    dispatch({ type: 'DELETE_LOG', payload: logId });
    setShowModal(false);
    history.push('/home');
  };

  const closeModal = () => {
    setShowModal(false);
  };

  // const editLog = (updatedLog) => {
  //   dispatch({ type: 'EDIT_LOG', payload: updatedLog });
  //   setShowModal(false);
  // };

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
                  <button onClick={() => openEditModal(log)}>Edit</button>
                </div>
              </div>
            </div>
          ))}
        </section>
      ) : null}
      {showModal && (
        <div className="modal">
          {selectedLog ? (
            <EditLogEntry log={selectedLog} closeModal={closeModal} />
          ) : (
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
          )}
        </div>
      )}
    </div>
  );
}

export default LogContainer;
