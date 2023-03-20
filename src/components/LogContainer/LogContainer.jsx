import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
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
  const [selectedLogEdit, setSelectedLogEdit] = useState(0);

  useEffect(() => {
    dispatch({ type: 'FETCH_LOG' });
  }, [dispatch]);

  // console.log('string in open edit modal', selectedLogEdit);

  const openEditModal = (selectedLog) => {
    setSelectedLogEdit(selectedLog);
    setShowModal(true);
  };

  const editLogModal = () => {
    dispatch({ type: 'EDIT_LOG', payload: selectedLogEdit });
    setShowModal(false);
    history.push(`/edit/${selectedLogEdit}`);
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
  };

  const closeDeleteModal = () => {
    setShowModal(false);
  };

  // console.log('this log???', log);

  return (
    <div className="log-container">
      ...
      {log.length > 0 ? (
        <section>
          {log.map((entry) => (
            <div className="individual-logs" key={entry.id}>
              <div className="individual-logs-content">
                <p>Title: {entry.title}</p>
                <p>
                  Date: {new Date(entry.date).toISOString().substring(0, 10)}
                </p>
                <p>Entry: {entry.entry}</p>
                <div>
                  <button onClick={() => openDeleteModal(entry.id)}>
                    Delete
                  </button>
                </div>
                <div>
                  <Link to={`/edit/${entry.id}`}>Edit</Link>
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
              <button onClick={() => deleteLogModal()}>Delete</button>
              <button onClick={() => closeDeleteModal()}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LogContainer;
