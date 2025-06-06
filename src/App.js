import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#work">My Work</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <header className="hero">
        <h1>Hi, I’m Meghashyam 👋</h1>
        <p>
          I’m a Data Science & AI enthusiast passionate about Machine Learning,
          Python, and solving real-world problems.
        </p>
      </header>

      <section className="section" id="about">
        <h2>👨‍💻 About Me</h2>
        <p>
          I'm an aspiring Data Scientist with a strong foundation in Python, Machine Learning,
          and AI. I'm currently enhancing my skills with real-world projects and certifications.
        </p>
      </section>

      <section className="section" id="work">
        <h2>💼 My Projects</h2>
        <div className="project-card">
          <h3>Anomaly Detection</h3>
          <p>
            A machine learning project using SVD to detect fraudulent transactions in credit card data.
          </p>
          <a
            href="https://github.com/smartygithub/Anomaly_Detection"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>
      </section>

      <section className="section" id="resume">
        <h2>📄 Resume</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
          <a
            href="Aspiring_Data_Scientist_Experienced.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="resume-button">View Resume</button>
          </a>
          <a
            href="Aspiring_Data_Scientist_Experienced.pdf"
            download="Meghashyam_Resume.pdf"
          >
            <button className="resume-button">Download Resume</button>
          </a>
        </div>
      </section>

      <section className="section" id="contact">
        <h2>📫 Contact</h2>
        <p>
          Feel free to reach out to me!
        </p>
        <ul className="contact-links">
          <li>
            <a
              href="https://www.linkedin.com/in/megha-shyam-931327264/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a href="mailto:meghashyamadimalla2003@gmail.com">
              Email
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default App;
