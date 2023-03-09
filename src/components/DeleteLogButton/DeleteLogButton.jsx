import React from 'react';
import { useDispatch } from 'react-redux';

function deleteLogButton() {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={deleteLogButton}>Delete</button>
    </div>
  );
}

export default deleteLogButton;
