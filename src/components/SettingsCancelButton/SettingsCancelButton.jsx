import React from 'react';
import { useHistory } from 'react-router-dom';

function SettingsCancelButton() {
  const history = useHistory();

  const settingsCancelButton = () => {
    console.log('discard changes clicked!');
    if (confirm('Would you like to discard changes?')) {
      history.push('/home');
    }
  };

  return (
    <div>
      <button onClick={settingsCancelButton}>Discard Changes</button>
    </div>
  );
}

export default SettingsCancelButton;
