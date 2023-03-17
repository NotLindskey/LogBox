import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import SettingsCancelButton from '../SettingsCancelButton/SettingsCancelButton';

function SettingsPage() {
  const state = useState();
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // takes in username and password to update settings
  const updateSettings = (event) => {
    event.preventDefault();
    if (confirm('confirm changes?')) {
      dispatch({
        type: 'UPDATE_SETTINGS',
        payload: {
          username: username,
          password: password,
        },
      });
    }
  };

  return (
    <div>
      <div>
        <h1>Settings</h1>
      </div>
      <h4>Update your profile:</h4>
      <form onSubmit={updateSettings}>
        {/* title input */}
        <div>
          <label htmlFor="username">
            Username:
            <input
              type="text"
              name="username"
              value={username}
              required
              onChange={(event) => setUsername(event.target.value)}
            />
          </label>
        </div>

        {/* password input */}
        <div>
          <label htmlFor="password">
            Password:
            <input
              type="text"
              name="password"
              value={password}
              required
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
        </div>

        {/* button to updated changes */}
        <div>
          <button type="submit">Update Changes</button>
        </div>
      </form>
      {/* go back home cancel button*/}
      <div>
        <SettingsCancelButton />
      </div>
    </div>
  );
}

export default SettingsPage;
