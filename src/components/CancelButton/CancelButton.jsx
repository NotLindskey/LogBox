import React from 'react';
import { useHistory } from 'react-router-dom';

function CancelButton() {
  const history = useHistory();

  const cancelButton = () => {
    history.push('/home');
  };

  return (
    <div>
      <button onClick={cancelButton}>Cancel</button>
    </div>
  );
}

export default CancelButton;
