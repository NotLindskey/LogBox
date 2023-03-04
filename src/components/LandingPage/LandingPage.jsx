import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

// CUSTOM COMPONENTS
// import RegisterForm from '../RegisterForm/RegisterForm';
import LoginPage from '../LoginForm/LoginForm';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome to LogBox!');
  const history = useHistory();

  // send user to registration
  const onStart = (event) => {
    history.push('/registration');
  };

  return (
    <div className="container">
      <h2>{heading}</h2>
      <div className="grid">
        <div className="grid-col grid-col_8">
          <h1>Log as you go!</h1>
          <h3>LogBox will help you log your favorite stream highlights.</h3>
          <p>Create logs on your terms: daily, weekly, monthly, annually.</p>
          <p>Forget Excel sheets, notes and journals.</p>
          <p>Keep all your logs in one place!</p>
        </div>

        <div className="grid-col grid-col_4">
          <LoginPage />
        </div>

        <div className="grid-col grid-col_8">
          <h4>Not a member yet?</h4>
          <button className="btn btn_sizeSm" onClick={onStart}>
            Start Here!
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
