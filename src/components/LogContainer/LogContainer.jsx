import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import EditLogButton from '../EditLogButton/EditLogButton';

import './LogContainer.css';

function LogContainer() {
  const dispatch = useDispatch();
  const log = useSelector((store) => store.log);

  // console.log('this log', log);

  useEffect(() => {
    // .payload || .type: title // date // entry
    dispatch({ type: 'FETCH_LOG' });
  }, [dispatch]);

  const deleteLogButton = (log) => {
    console.log('button clicked!', log);
    dispatch({ type: 'DELETE_LOG', payload: log.id });
  };

  return (
    <div className="log-container">
      {JSON.stringify(log)}
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
                <button
                  className="inside component button"
                  onClick={() => deleteLogButton(log)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </section>
      ) : null}
    </div>
  );
}

export default LogContainer;

// this was my old deleteLogButton component file
// export default LogContainer;

// import React from 'react';
// import { useDispatch } from 'react-redux';

// const dispatch = useDispatch();

// const deleteLogButton = () => {
//   console.log('delete clicked');

//   //   if (confirm('did you want to delete log?')) {
//   // .payload || .type: title // date // entry
//   dispatch({ type: 'DELETE_LOG' });
//   return (
//     <div>
//       <button onClick={deleteLogButton}>Delete</button>
//     </div>
//   );
// };
