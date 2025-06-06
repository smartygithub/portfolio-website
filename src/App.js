import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <a
          href="/Aspiring_Data_Scientist_Experienced.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </nav>

      <section id="about" className="section">
        <h1>Hi, I’m Meghashyam 👋</h1>
        <p>
          I’m a Data Science & AI enthusiast passionate about Machine Learning, Python, and solving real-world problems.
        </p>
      </section>

      <section id="projects" className="section">
        <h2>💼 My Projects</h2>
        <div className="project">
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
        {/* Add more projects here */}
      </section>

      <section id="contact" className="section">
        <h2>📫 Contact</h2>
        <p>Email: <a href="mailto:meghashyamadimalla2003@gmail.com">meghashyamadimalla2003@gmail.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/megha-shyam-931327264/" target="_blank" rel="noopener noreferrer">Meghashyam Adimallam</a></p>
        <p>GitHub: <a href="https://github.com/smartygithub" target="_blank" rel="noopener noreferrer">smartygithub</a></p>
      </section>
    </div>
  );
}

export default App;
