import React from 'react';

import './AboutPage.css';

function AboutPage() {
  return (
    <div>
      <div>
        <div>
          <div>
            <h2>About LogBox!</h2>
          </div>
          <div className="container-wrapper">
            <div className="pink-board-container ">
              <p>
                LogBox is an innovative platform designed to help you keep track
                of your favorite highlights of just about anything. Whether it's
                sports, games, TV shows, books, or movies, LogBox makes it easy
                for you to log and track your favorite moments.
              </p>
            </div>
            <div className="blue-board-container ">
              <p>
                Forget about the hassle of managing multiple Excel sheets,
                notes, and journals - LogBox makes it simple to keep all your
                logs in one convenient location.
              </p>
            </div>
            <div className="green-board-container ">
              <p>
                Our platform is designed to help you stay organized and relive
                your favorite moments anytime, anywhere. So why wait? Start
                logging with LogBox today and experience the convenience of
                having all your in one place.
              </p>
            </div>
            <div className="purple-board-container ">
              <p>
                Thank you to the Lydian Cohort and all of Prime staff and anyone
                who supported me in this new journey.
              </p>
            </div>
          </div>
        </div>

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
      <div>
        <button>Home</button>
      </div>
    </div>
  );
}

export default AboutPage;
