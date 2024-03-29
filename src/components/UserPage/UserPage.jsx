import React from 'react';
import { useSelector } from 'react-redux';
import CreateLogButton from '../CreateLogButton/CreateLogButton';
import LogContainer from '../LogContainer/LogContainer';
import LogOutButton from '../LogOutButton/LogOutButton';
import './UserPage.css';

function UserPage() {
  const user = useSelector((store) => store.user);

  return (
    <section>
      <div className="welcome-user">
        <p>Welcome, {user.username}!</p>
      </div>

      <br />

      {/* ... */}

      <div>
        {/* lets user create log */}
        <CreateLogButton />
      </div>

      <div>
        {/* displays the log containers */}
        <LogContainer />
      </div>

      <div>
        {/* button to log user out */}
        <LogOutButton className="log-out-button" />
      </div>
    </section>
  );
}

export default UserPage;
