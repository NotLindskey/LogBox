import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import EditLogButton from '../EditLogButton/EditLogButton';

import './LogContainer.css';

function logContainer() {
  const dispatch = useDispatch();
  const log = useSelector((store) => store.log);

  useEffect(() => {
    // .payload || .type: title // date // entry
    dispatch({ type: 'FETCH_LOG' });
  }, [dispatch]);

  return (
    <div className="log-container">
      {log.map((log) => (
        <div className="individual-logs" key={log.id}>
          <p>Title: {log.title}</p>
          <p>Date: {log.date}</p>
          <p>Entry: {log.entry}</p>
          <EditLogButton />
        </div>
      ))}
    </div>
  );
}

export default logContainer;
