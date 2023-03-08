import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import SettingsCancelButton from '../SettingsCancelButton/SettingsCancelButton';

function SettingsPage() {
  const state = useState();
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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
      <form onSubmit={updateSettings}>
        {/* title input */}
        <div>
          <label htmlFor="username">
            Username:
            <input
              type="text"
              name="username"
              value={username}
              // required
              onChange={(event) => setUsername(event.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            Username:
            <input
              type="text"
              name="password"
              value={password}
              // required
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
        </div>
        <div>
          <button type="submit">Update Changes</button>
        </div>
      </form>
      <div>
        <SettingsCancelButton />
      </div>
    </div>
  );
}

export default SettingsPage;
