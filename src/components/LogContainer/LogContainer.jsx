import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './LogContainer.css';

import EditLogEntry from '../EditLogEntry/EditLogEntry';

function LogContainer() {
  const dispatch = useDispatch();
  const log = useSelector((store) => store.log);
  const [showModal, setShowModal] = useState(false);

  const [logId, setLogId] = useState(null);

  useEffect(() => {
    dispatch({ type: 'FETCH_LOG' });
  }, [dispatch]);

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

  /* Define a function to generate a random color */
  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // console.log('this log???', log);

  return (
    <div className="all-logs">
      {log.length > 0 ? (
        <section>
          {log.map((entry) => (
            <div
              className="individual-logs"
              key={entry.id}
              style={{ backgroundColor: getRandomColor() }}
            >
              <div className="individual-logs-content">
                <h5>
                  <span>
                    {new Date(entry.date).toISOString().substring(0, 10)}
                  </span>
                </h5>
                <h4>{entry.title}</h4>

                <p>{entry.entry}</p>
                <div>
                  <button onClick={() => openDeleteModal(entry.id)}>
                    Delete
                  </button>
                </div>
                <div>
                  <Link to={`/edit/${entry.id}`} className="button-link">
                    Edit
                  </Link>
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
