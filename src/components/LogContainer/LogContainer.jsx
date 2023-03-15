import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useHistory } from 'react-router-dom';

// import EditLogButton from '../EditLogButton/EditLogButton';

import './LogContainer.css';

function LogContainer() {
  const dispatch = useDispatch();
  const history = useHistory();
  const log = useSelector((store) => store.log);
  // console.log('this log', log);

  const [showModal, setShowModal] = useState(false);

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
  } else {

  const cancelDeleteBtn = () => {
    history.push('/home');
    setShowModal(false);
  }};

  return (
    <div className="log-container">
      {/* {JSON.stringify(log)} */}
      {log.length > 0 ? (
        <section>
          {log.map((log) => (
            <div className="individual-logs" key={log.id}>
              <p>Title: {log.title}</p>
              <p>Date: {log.date}</p>
              <p>Entry: {log.entry}</p>
              <div>
                <button onClick={() => setShowModal(true)}>Delete Log</button>
                {showModal && (
                  <div className="modal">
                    <div className="modal-content">
                      <p>Would you like to delete this log?</p>
                      <button onClick={() => deleteLogButton(log)}>
                        Delete
                      </button>
                      {/* <button onClick={() => cancelDeleteBtn()}>Cancel</button> */}
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
