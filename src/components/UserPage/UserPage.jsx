import React from 'react';

import CreateLogButton from '../CreateLogButton/CreateLogButton';
import LogContainer from '../LogContainer/LogContainer';

import './UserPage.css';

import { useSelector } from 'react-redux';

function UserPage() {
  // Renders a user reducer info to the DOM
  const user = useSelector((store) => store.user);

  return (
    <section>
      <div className="container">
        <h2>Welcome, {user.username}!</h2>
      </div>

      <br />

      <div>
        {/* lets user create log */}
        <CreateLogButton />
      </div>

      <div>
        {/* shows user their own logs ** need to map this I think? **  */}
        <LogContainer />
      </div>
    </section>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
