import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useHistory } from 'react-router-dom';

import './LogContainer.css';

function LogContainer() {
  const dispatch = useDispatch();
  const history = useHistory();
  const log = useSelector((store) => store.log);
  // console.log('this log', log);

  const [showModal, setShowModal] = useState(false);

  // replace inline SetShowModal, with a named Function,
  // and that named function will fire off SetShowModal and SetLogId

  // and then the delete function that gets fired off
  // from inside the modal can use the logId variable when it calls DELETE_LOG

  useEffect(() => {
    // .payload || .type: title // date // entry
    dispatch({ type: 'FETCH_LOG' });
  }, [dispatch]);

  const closeModal = () => {
    history.push('/home');
    setShowModal(false);
  };

  const deleteLogButton = (log) => {
    event.preventDefault();
    console.log('button clicked!', log);
    dispatch({ type: 'DELETE_LOG', payload: log.id });
    history.push('/home');
  };

  const cancelDeleteBtn = () => {
    setShowModal(false);
    history.push('/home');
  };

  return (
    <div className="log-container">
      {/* {JSON.stringify(log)} */}
      {log.length > 0 ? (
        <section>
          {log.map((log) => (
            <div className="individual-logs" key={log.id}>
              <div className="individual-logs-content">
                <p>Title: {log.title}</p>
                <p>Date: {log.date}</p>
                <p>Entry: {log.entry}</p>
                <div>
                  <button onClick={() => setShowModal(true, log.id)}>
                    Delete Log
                  </button>
                </div>
              </div>
              <div>
                {showModal && (
                  <div className="modal">
                    {JSON.stringify(log[0])}
                    <div className="modal-content">
                      <h3>Would you like to delete this log?</h3>
                      <div className="modal-delete-text-content">
                        <p>Title: {log.title}</p>
                        <p>Date: {log.date}</p>
                        <p>Entry: {log.entry}</p>
                      </div>
                      <div>
                        <button onClick={() => deleteLogButton(log)}>
                          Delete
                        </button>
                        <button onClick={() => cancelDeleteBtn()}>
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </section>
      ) : null}
    </div>
  );
}

export default LogContainer;
