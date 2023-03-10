import React from 'react';
// import { useDispatch } from 'react-redux';

function DeleteLogButton() {
  // const dispatch = useDispatch();

  const deleteLogButton = () => {
    console.log('delete clicked');
    //   if (confirm('did you want to delete log?')) {
    //     dispatch({ type: 'DELETE_LOG' });
    //   }
  };

  return (
    <div>
      <button onClick={deleteLogButton}>Delete</button>
    </div>
  );
}

export default DeleteLogButton;
