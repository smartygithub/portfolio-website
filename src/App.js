import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="nav">
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="/Meghashyam_Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="about" className="section">
        <h1>Hi, I’m Meghashyam 👋</h1>
        <p>
          I’m a Data Science & AI enthusiast passionate about Machine Learning, Python, and solving real-world problems.
        </p>
      </section>

      <section id="work" className="section">
        <h2>💼 My Projects</h2>
        <div className="project-card">
          <h3>Anomaly Detection</h3>
          <p>A machine learning project using SVD to detect fraudulent transactions in credit card data.</p>
          <a href="https://github.com/smartygithub/Anomaly_Detection" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>
      </section>

      <section id="contact" className="section">
        <h2>📬 Contact</h2>
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
      </section>

      <footer className="footer">
        <p>© 2025 Meghashyam Adimallam. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
