import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import TechStacks from '../TechStacks/TechStacks';

import './AboutPage.css';

function AboutPage() {
  const history = useHistory();
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // button that sends user back to theLandingPage
  const sendToHomeHandle = () => {
    history.push('/home');
  };

  // Render
  return (
    <div>
      <div>
        <div>
          <div className="about-title">
            <h2>About LogBox!</h2>
          </div>
          <div className="container-wrapper">
            <div className="pink-board-container ">
              <h4>
                LogBox is an innovative platform designed to keep track of your
                logs of just about anything.
              </h4>
              <ul>
                <li>Sports</li>
                <li>Games</li>
                <li>TV Shows</li>
                <li>Books</li>
                <li>Movies</li>
              </ul>
              <h4> LogBox makes it easy for you!</h4>
            </div>
            <div className="blue-board-container ">
              <h4>
                Forget about the hassle of managing multiple Excel sheets,
                notes, and journals
              </h4>
              <p>
                - LogBox makes it simple to keep all your logs in one convenient
                location.
              </p>
            </div>
            <div className="green-board-container ">
              <p>
                Our platform's designed to help organize and relive your
                favorite moments anytime.
              </p>
              <p>
                <em>
                  <h4>So why wait?</h4>
                </em>
              </p>
              <p>
                Start logging with LogBox today and experience the convenience
                of having all your logs in one place.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div>
            <button onClick={handleButtonClick}>More Info</button>
            {showModal && (
              <div className="modal">
                <div className="modal-content">
                  <div className="purple-board-container ">
                    <div className="purple-board-content"> </div>
                    <h4>Thank you Lydian!</h4>
                    <h4>
                      To our instructor Casie Siekman and all of The Prime
                      Academy Team!
                    </h4>
                    <h4>Family and Friends who understood and supported.</h4>
                    <h4>The coworkers who motivated.</h4>
                    <h4>
                      Atlas!, <br />
                      Thank you to all of for being here!
                    </h4>
                  </div>
                  <div>
                    <TechStacks />
                  </div>

                  <div>
                    <img
                      src="public/styling/imgIcons/lindskey6_emote.png"
                      alt="img of Lindskey6 Emote"
                    />
                  </div>

                  <div>
                    <button onClick={handleCloseModal}>Close Info</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div>
          <button onClick={sendToHomeHandle}>Home</button>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
