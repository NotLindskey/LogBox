import React from 'react';
import { useHistory } from 'react-router-dom';

function CancelLogButton() {
  const history = useHistory();

  const confirmCancel = () => {
    console.log('cancel entry clicked!');
    if (confirm('Would you like to discard your entry?')) {
      history.push('/home');
    }
  };

  return (
    <div>
      <button onClick={confirmCancel}>Cancel Entry</button>
    </div>
  );
}

export default CancelLogButton;
