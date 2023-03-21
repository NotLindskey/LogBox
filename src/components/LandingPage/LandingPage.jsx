import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

import LoginPage from '../LoginForm/LoginForm';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome to LogBox!');
  const history = useHistory();

  const onStart = (event) => {
    history.push('/registration');
  };

  const signIn = () => {
    history.push('login');
  };

  return (
    <div className="container">
      <h1>{heading}</h1>
      <div className="grid">
        <div className="grid-col grid-col_10">
          <h3 className="heading-primary">Log as you go!</h3>
          <h3 className="heading-secondary">
            LogBox will help you log your favorite highlights of just about
            anything!
          </h3>
          <ul className="features-list">
            <li>
              Create logs on your terms: daily, weekly, monthly, annually.
            </li>
            <li>Forget Excel sheets, notes and journals.</li>
            <li>Keep all your logs in one place!</li>
          </ul>
        </div>

        <div>
          <h4 className="heading-tertiary">Not a member yet?</h4>
          <button className="btn btn_sizeSm btn_primary" onClick={onStart}>
            Start Here!
          </button>
        </div>

        <div className="grid-col grid-col_11">
          <h4 className="heading-tertiary">Already a Member?</h4>
          {/* <LoginPage /> */}
          <button className="btn btn_sizeSm btn_primary" onClick={signIn}>
            Sign-in
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
