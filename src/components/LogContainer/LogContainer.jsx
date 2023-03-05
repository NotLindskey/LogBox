import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './LogContainer.css';

function logContainer() {
  const dispatch = useDispatch();

  // const user = useSelector((store) => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_LOG' });
  }, [dispatch]);

  return (
    <div className="log-container">
      <p>logContainer</p>
    </div>
  );
}

export default logContainer;
