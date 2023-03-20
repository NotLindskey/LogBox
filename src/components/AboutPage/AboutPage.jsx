import React from 'react';

import './AboutPage.css';

function AboutPage() {
  return (
    <div className="container">
      <div>
        <h2>About LogBox!</h2>
        <p>
          LogBox is an innovative platform designed to help you keep track of
          your favorite highlights of just about anything. Whether it's sports
          games, TV shows, books, or movies, LogBox makes it easy for you to log
          and track your favorite moments.
        </p>
        <p>
          Forget about the hassle of managing multiple Excel sheets, notes, and
          journals - LogBox makes it simple to keep all your logs in one
          convenient location.
        </p>
        <p>
          Our platform is designed to help you stay organized, track your
          progress, and relive your favorite moments anytime, anywhere. So why
          wait? Start logging with LogBox today and experience the convenience
          of having all your highlights in one place.
        </p>
        <div>
          <br />
          <p>Technologies Used:</p>
          <ul className="tech-stack">
            <li>
              <span>HTML</span>
            </li>
            <li>
              <span>CSS</span>
            </li>
            <li>
              <span>JavaScript</span>
            </li>
            <li>
              <span>Express</span>
            </li>
            <li>
              <span>Postico</span>
            </li>
            <li>
              <span>React</span>
            </li>
            <li>
              <span>Node.js</span>
            </li>
            <li>
              <span>Redux</span>
            </li>
            <li>
              <span>Saga</span>
            </li>
            <li>
              <span>Heroku</span>
            </li>
          </ul>
        </div>
      </div>
      <p>
        Thank you to the Lydian Cohort and all of Prime staff and anyone who
        supported me in this new journey.
      </p>
    </div>
  );
}

export default AboutPage;
