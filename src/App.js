import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Navigation Bar */}
      <nav className="navbar">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#work">My Work</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <h1>Hi, I’m Meghashyam 👋</h1>
        <p>
          I’m a Data Science & AI enthusiast passionate about Machine Learning, Python, and solving real-world problems.
        </p>
        <a className="cta" href="#work">View My Projects</a>
      </header>

      {/* About Section */}
      <section id="about">
        <h2>About Me</h2>
        <p>
          I'm currently pursuing a degree in Data Science. I enjoy building machine learning models, analyzing data, and exploring new technologies in AI. My portfolio reflects my passion for combining code, creativity, and data to build impactful solutions.
        </p>
      </section>

      {/* Work Section */}
      <section id="work">
        <h2>My Projects</h2>
        <div className="project">
          <h3>Anomaly Detection</h3>
          <p>A machine learning project using SVD to detect fraudulent transactions in credit card data.</p>
          <a href="https://github.com/smartygithub/Anomaly_Detection" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <h2>Contact</h2>
        <p>
          Connect with me:
          <br />
          <a href="https://www.linkedin.com/in/megha-shyam-931327264/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <br />
          Email: <a href="mailto:meghashyamadimalla2003@gmail.com">meghashyamadimalla2003@gmail.com</a>
        </p>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2025 Meghashyam Adimallam</p>
      </footer>
    </div>
  );
}

export default App;
