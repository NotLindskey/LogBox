import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <h2>About LogBox!</h2>
        <p>Log as you go! </p>
        LogBox will help you log your favorite stream highlights. Create logs on
        your terms: daily, weekly, monthly, annually. Forget Excel sheets, notes
        and journals. Keep all your logs in one place!
        <p>Technologies used:</p>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Express</li>
          <li>Postico</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Redux</li>
          <li>Saga</li>
          <li>Heroku</li>
        </ul>
      </div>

      <p>
        Thank you to the Lydian Cohort and all of Prime staff and anyone who
        supported me in this new journey.
      </p>
    </div>
  );
}

export default AboutPage;
