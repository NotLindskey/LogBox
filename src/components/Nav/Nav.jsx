import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      <Link to="/home">
        <h2 className="nav-title">LogBox</h2>
      </Link>
      <ul className="navLinks">
        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
          <li>
            <Link className="navLink" to="/login">
              Login / Register
            </Link>
          </li>
        )}

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            <li>
              <Link className="navLink" to="/user">
                Home
              </Link>
            </li>

            {/* Only show the Settings link if the user is logged in */}
            {user.id && (
              <li>
                <Link className="navLink" to="/settings">
                  Settings
                </Link>
              </li>
            )}

            <li>
              <LogOutButton className="navLink" />
            </li>
          </>
        )}

        <li>
          <Link className="navLink" to="/about">
            About
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
