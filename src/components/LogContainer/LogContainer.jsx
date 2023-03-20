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
  // const editLog = useSelector((store) => store.editLogReducer);

  const [logId, setLogId] = useState(null);

  // keep track of log that is selected for editing
  const [selectedLogEdit, setSelectedLogEdit] = useState(null);

  useEffect(() => {
    dispatch({ type: 'FETCH_LOG' });
  }, [dispatch]);

  console.log('string in open edit modal', selectedLogEdit);

  const openEditModal = (selectedLog) => {
    console.log(log.id);
    setSelectedLogEdit(selectedLog);
    setShowModal(true);
    // dispatch: ({ type: 'UPDATE_LOG', payload: log.id });
  };
  const editLogModal = () => {
    dispatch({ type: 'DELETE_LOG', payload: logId });
    setShowModal(false);
    history.push('/home');
  };

  const closeEditModal = () => {
    setShowModal(false);
  };

  const openDeleteModal = (logId) => {
    setLogId(logId);
    setShowModal(true);
  };

  const deleteLogModal = () => {
    dispatch({ type: 'DELETE_LOG', payload: logId });
    setShowModal(false);
    history.push('/home');
  };

  const closeDeleteModal = () => {
    setShowModal(false);
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
                  <button onClick={() => openEditModal(log.id)}>Edit</button>
                </div>
              </div>
            </div>
          ))}
        </section>
      ) : null}
      {showModal && (
        <div className="modal">
          {selectedLogEdit ? (
            <div className="modal-content">
              <h3>Would you like to edit this log?</h3>
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
                <button onClick={() => editLogModal()}>Edit</button>
                <button onClick={() => closeEditModal()}>Cancel</button>
              </div>
            </div>
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
                <button onClick={() => deleteLogModal()}>Delete</button>
                <button onClick={() => closeDeleteModal()}>Cancel</button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default LogContainer;
