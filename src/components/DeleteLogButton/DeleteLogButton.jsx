import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function deleteLogButton() {
  const dispatch = useDispatch();
  const deleteLog = useSelector((store) => store.deleteLog);

  const deleteLogButton = () => {
    console.log('delete clicked');
    if (confirm('did you want to delete log?')) {
      dispatch({ type: 'DELETE_LOG' });
    }
  };

  return (
    <div>
      <button onClick={deleteLogButton}>Delete</button>
    </div>
  );
}

export default deleteLogButton;
