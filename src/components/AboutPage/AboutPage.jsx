import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <h2>About logBox!</h2>
        <p>LogBox is an application customized to help you create logs.
        </p>
      </div>
    </div>
  );
}

export default AboutPage;

