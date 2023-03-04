import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import CreateLogButton from '../CreateLogButton/CreateLogButton';

import { useSelector } from 'react-redux';

function UserPage() {
  // Renders a user reducer info to the DOM
  const user = useSelector((store) => store.user);

  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      <LogOutButton className="btn" />
      <br />
      {/* lets user create log */}
      <CreateLogButton />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
