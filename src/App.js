import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <header className="navbar">
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section id="about" className="section">
        <h1>Hi, I’m Meghashyam 👋</h1>
        <p>I’m a Data Science & AI enthusiast passionate about Machine Learning, Python, and solving real-world problems.</p>
      </section>

      <section id="projects" className="section">
        <h2>💼 Projects</h2>
        <div>
          <h3>Anomaly Detection</h3>
          <p>A machine learning project using SVD to detect fraudulent transactions in credit card data.</p>
          <a href="https://github.com/smartygithub/Anomaly_Detection" target="_blank" rel="noreferrer">View on GitHub</a>
        </div>
      </section>

      <section id="resume" className="section">
        <h2>📄 Resume</h2>
        <p>You can view or download my resume below:</p>
        <a href="/Aspiring_Data_Scientist_Experienced.pdf" target="_blank" rel="noopener noreferrer">
          📥 Download Resume
        </a>
      </section>

      <section id="contact" className="section">
        <h2>📬 Contact</h2>
        <p>📧 Email: <a href="mailto:meghashyamadimalla2003@gmail.com">meghashyamadimalla2003@gmail.com</a></p>
        <p>🔗 LinkedIn: <a href="https://www.linkedin.com/in/megha-shyam-931327264/" target="_blank" rel="noreferrer">Meghashyam Adimallam</a></p>
      </section>
    </div>
  );
}

export default App;
