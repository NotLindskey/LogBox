import React, { useState } from 'react';

import CancelButton from '../CancelButton/CancelButton';

function SettingsPage() {
  const state = useState();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const updateChanges = () => {
    console.table('update changes clicked!');
  };

  return (
    <div>
      <div>
        <h1>Settings</h1>
      </div>
      <div>
        {/* title input */}
        <div>
          <label htmlFor="Username">
            Username:
            <input
              type="text"
              name="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="Password">
            Username:
            <input
              type="text"
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
        </div>
        <div>
          <button onClick={updateChanges}>Update Changes</button>
        </div>
        <div>
          <CancelButton />
        </div>
      </div>
    </div>
  );
}

export default SettingsPage;
