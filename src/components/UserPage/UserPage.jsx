import React from 'react';

import CreateLogButton from '../CreateLogButton/CreateLogButton';
import LogContainer from '../LogContainer/LogContainer';

import { useSelector } from 'react-redux';

function UserPage() {
  // Renders a user reducer info to the DOM
  const user = useSelector((store) => store.user);

  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      {/* <p>Your ID is: {user.id}</p> */}
      <br />
      <div>
        {/* lets user create log */}
        <CreateLogButton />
      </div>
      <div>
        {/* shows user their own logs ** need to map this I think? **  */}
        <LogContainer />
      </div>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
