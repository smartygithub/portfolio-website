import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="hero">
        <div className="overlay">
          <h1>Hi, I’m Meghashyam 👋</h1>
          <p>
            Data Science & AI enthusiast passionate about Machine Learning,
            Python, and solving real-world problems.
          </p>
          <a
            className="cta-button"
            href="/Aspiring_Data_Scientist_Experienced.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
          </a>
        </div>
      </header>

      <nav className="navbar">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

      <section id="about" className="section light">
        <h2>About Me</h2>
        <p>
          I am currently pursuing my interests in machine learning and AI with
          a strong foundation in Python and statistics. My goal is to solve
          real-world problems through data.
        </p>
      </section>

      <section id="projects" className="section dark">
        <h2>💼 Projects</h2>
        <div className="project-card">
          <h3>Anomaly Detection</h3>
          <p>
            A machine learning project using SVD to detect fraudulent
            transactions in credit card data.
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

      <section id="contact" className="section light">
        <h2>📫 Contact</h2>
        <p>
          Email: <a href="mailto:meghashyamadimalla2003@gmail.com">meghashyamadimalla2003@gmail.com</a>
        </p>
        <p>
          LinkedIn: <a href="https://www.linkedin.com/in/megha-shyam-931327264/" target="_blank" rel="noopener noreferrer">Meghashyam Adimallam</a>
        </p>
        <p>
          GitHub: <a href="https://github.com/smartygithub" target="_blank" rel="noopener noreferrer">smartygithub</a>
        </p>
      </section>

      <footer className="footer">
        <p>© 2025 Meghashyam Adimallam</p>
      </footer>
    </div>
  );
}

export default App;
