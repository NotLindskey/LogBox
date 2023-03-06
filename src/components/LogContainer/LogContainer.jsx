import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import EditLogButton from '../EditLogButton/EditLogButton';

import './LogContainer.css';

function logContainer() {
  const dispatch = useDispatch();
  const log = useSelector((store) => store.log);

  useEffect(() => {
    dispatch({ type: 'FETCH_LOG' });
  }, [dispatch]);

  return (
    <div className="log-container">
      {/* {JSON.stringify(logs)} */}
      {log.map((log) => (
        <div className="individual-logs" key={log.id}>
          <p>Date: {log.date}</p>
          <p>Start Time: {log.start_time}</p>
          <p>End Time: {log.end_time}</p>
          <p>Entry: {log.entry}</p>
          <EditLogButton />
        </div>
      ))}
    </div>
  );
}

export default logContainer;
