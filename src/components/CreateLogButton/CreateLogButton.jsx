import React from 'react';
import { useHistory } from 'react-router-dom';

function CreateLogButton() {
  const history = useHistory();

  const createLogButton = () => {
    history.push('/createNewLog');
  };

  return (
    <div>
      <button onClick={createLogButton}>Create New Log</button>
    </div>
  );
}

export default CreateLogButton;
