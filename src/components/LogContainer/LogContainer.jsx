import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import EditLogButton from '../EditLogButton/EditLogButton';
import DeleteLogButton from '../DeleteLogButton/DeleteLogButton';

import './LogContainer.css';

function LogContainer() {
  const dispatch = useDispatch();
  const log = useSelector((store) => store.log);
  console.log(log);
  useEffect(() => {
    // .payload || .type: title // date // entry
    dispatch({ type: 'FETCH_LOG' });
  }, [dispatch]);

  return (
    <div className="log-container">
      {log.length > 0 && (
        <>
          {log.map((log) => (
            <div className="individual-logs" key={log.id}>
              <p>Title: {log.title}</p>
              <p>Date: {log.date}</p>
              <p>Entry: {log.entry}</p>
              <EditLogButton />
              <DeleteLogButton />
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default LogContainer;
