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
        <div>
          <h1>Log as you go!</h1>
          <h3>
            LogBox will help you log your favorite highlights of just about
            anything!
          </h3>
          <p>Create logs on your terms: daily, weekly, monthly, annually.</p>
          <p>Forget Excel sheets, notes and journals.</p>
          <p>Keep all your logs in one place!</p>
        </div>

        <div>
          <h4>Not a member yet?</h4>
          <button className="btn btn_sizeSm" onClick={onStart}>
            Start Here!
          </button>
        </div>

        <div className="grid-col grid-col_8">
          <h4>Already a Member?</h4>
          <LoginPage />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
