import React from 'react';
import './TechStacks.css'; // Import the CSS file with the styles

function TechStacks() {
  return (
    <div>
      <br />
      <p>Technologies Used:</p>
      <ul className="tech-stack">
        <li>
          <span className="tech-html">HTML</span>
        </li>
        <li>
          <span className="tech-css">CSS</span>
        </li>
        <li>
          <span className="tech-js">JavaScript</span>
        </li>
        <li>
          <span className="tech-express">Express</span>
        </li>
        <li>
          <span className="tech-postico">Postico</span>
        </li>
        <li>
          <span className="tech-react">React</span>
        </li>
        <li>
          <span className="tech-node">Node.js</span>
        </li>
        <li>
          <span className="tech-redux">Redux</span>
        </li>
        <li>
          <span className="tech-saga">Saga</span>
        </li>
      </ul>
    </div>
  );
}

export default TechStacks;
