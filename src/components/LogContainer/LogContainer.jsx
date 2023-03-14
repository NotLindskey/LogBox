import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import EditLogButton from '../EditLogButton/EditLogButton';

import './LogContainer.css';

function LogContainer() {
  const dispatch = useDispatch();
  const log = useSelector((store) => store.log);
  // console.log('this log', log);

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // .payload || .type: title // date // entry
    dispatch({ type: 'FETCH_LOG' });
  }, [dispatch]);

  const deleteLogButton = (log) => {
    if (confirm('Would you like to discard your entry?')) {
      console.log('button clicked!', log);
      // className="inside component button"
      // onClick={() => deleteLogButton(log)}
      dispatch({ type: 'DELETE_LOG', payload: log.id });
    }
  };
  function closeModal() {
    if (confirm('Would you like to discard your entry?')) {
      history.push('/home');
      setShowModal(false);
    }
  }

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
              <EditLogButton />
              {/* <DeleteLogButton /> */}
              <div>
                {/* <button
                  className="inside component button"
                  onClick={() => deleteLogButton(log)}
                >
                  Delete
                </button> */}
                <button onClick={() => setShowModal(true)}>Delete Log</button>
                {showModal && (
                  <div className="modal">
                    <div className="modal-content">
                      <button onClick={() => deleteLogButton(log)}>
                        Cancel
                      </button>
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

// // return (
// //   <>
// //     <button onClick={() => setShowModal(true)}>Delete</button>
// //     {showModal && (
// //       <div className="modal">
// //         <div className="modal-content">
// className="inside component button"
// onClick={() => deleteLogButton(log)}
// //           <button onClick={closeModal}>Cancel</button>
// //         </div>
// //       </div>
// //     )}
// //   </>
// // );
