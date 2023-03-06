import React from 'react';
import { useHistory } from 'react-router-dom';

function editLogButton() {
  const history = useHistory();

  const editLogButton = () => {
    history.push('/editLogEntry');
  };
  return (
    <div>
      <button onClick={editLogButton}>Edit Log</button>
    </div>
  );
}

export default editLogButton;
