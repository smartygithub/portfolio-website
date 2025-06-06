import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <nav className="navbar">
        <a href="#about">About</a>
        <a href="#work">Work</a>
        <a href="#contact">Contact</a>
      </nav>

      <section id="about" className="section">
        <h1>Hi, I'm Meghashyam 👋</h1>
        <p>I'm a Data Science & AI enthusiast passionate about solving real-world problems.</p>
      </section>

      <section id="work" className="section">
        <h2>💼 Projects</h2>
        <h3>Anomaly Detection</h3>
        <p>
          A machine learning project using SVD to detect fraudulent transactions.
          <br />
          <a href="https://github.com/smartygithub/Anomaly_Detection" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </p>
      </section>

      <section id="contact" className="section">
        <h2>📫 Contact</h2>
        <p>Email: <a href="mailto:meghashyamadimalla2003@gmail.com">meghashyamadimalla2003@gmail.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/megha-shyam-931327264/" target="_blank" rel="noopener noreferrer">Meghashyam Adimallam</a></p>
      </section>
    </div>
  );
}

export default App;
