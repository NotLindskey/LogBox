import React from 'react';
import { useHistory } from 'react-router-dom';

function editLogButton() {
  const history = useHistory();

  const editLogButton = () => {
    history.push('/editLogForm');
  };
  return (
    <div>
      <button onClick={editLogButton}>Edit Log</button>
    </div>
  );
}

export default editLogButton;
