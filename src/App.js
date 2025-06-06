import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <a href="#about">About</a>
        <a href="#work">My Work</a>
        <a href="#resume">Resume</a>
        <a href="#contact">Contact</a>
      </nav>

      <section className="section" id="about">
        <h1>Hi, I’m Meghashyam 👋</h1>
        <p>
          I’m a Data Science & AI enthusiast passionate about Machine Learning, Python, and solving real-world problems.
        </p>
      </section>

      <section className="section" id="work">
        <h2>💼 My Projects</h2>
        <div className="project">
          <h3>Anomaly Detection</h3>
          <p>A machine learning project using SVD to detect fraudulent transactions in credit card data.</p>
          <a href="https://github.com/smartygithub/Anomaly_Detection" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>
      </section>

      <section className="section" id="resume">
        <h2>📄 Resume</h2>
        <a
          href="Aspiring_Data_Scientist_Experienced.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="resume-button">
            View Resume
          </button>
        </a>
      </section>

      <section className="section" id="contact">
        <h2>📫 Contact</h2>
        <p>
          <strong>Email:</strong>{' '}
          <a href="mailto:meghashyamadimalla2003@gmail.com">meghashyamadimalla2003@gmail.com</a>
        </p>
        <p>
          <strong>LinkedIn:</strong>{' '}
          <a href="https://www.linkedin.com/in/megha-shyam-931327264/" target="_blank" rel="noopener noreferrer">
            Meghashyam Adimallam
          </a>
        </p>
        <p>
          <strong>GitHub:</strong>{' '}
          <a href="https://github.com/smartygithub" target="_blank" rel="noopener noreferrer">
            smartygithub
          </a>
        </p>
      </section>
    </div>
  );
}

export default App;
