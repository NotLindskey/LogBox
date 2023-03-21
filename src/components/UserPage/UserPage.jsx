import React from 'react';
import { useSelector } from 'react-redux';
import CreateLogButton from '../CreateLogButton/CreateLogButton';
import LogContainer from '../LogContainer/LogContainer';
import LogOutButton from '../LogOutButton/LogOutButton';
import './UserPage.css';

function UserPage() {
  const user = useSelector((store) => store.user);

  return (
    <section className="user-page-container">
      <div>
        <h2>Welcome, {user.username}!</h2>
      </div>

      <br />

      <div>
        {/* lets user create log */}
        <CreateLogButton />
      </div>

      <div>
        <LogContainer />
      </div>

      <div>
        <LogOutButton className="log-out-button" />
      </div>
    </section>
  );
}

export default UserPage;
