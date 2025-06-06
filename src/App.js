import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#work">Work</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <h1>Hi, I'm Meghashyam 👋</h1>
        <p>Aspiring Data Scientist & AI Engineer</p>
        <a href="#work" className="btn">View My Work</a>
      </section>

      {/* About Section */}
      <section id="about">
        <h2>About Me</h2>
        <p>
          I’m a Data Science & AI enthusiast passionate about Machine Learning, Python,
          and solving real-world problems. I'm currently building projects in ML, DL,
          and cloud, aiming to make intelligent systems more accessible.
        </p>
      </section>

      {/* Work / Projects Section */}
      <section id="work">
        <h2>My Work</h2>
        <div className="project">
          <h3>Anomaly Detection</h3>
          <p>
            A machine learning project using SVD to detect fraudulent transactions in
            credit card data.
          </p>
          <a href="https://github.com/smartygithub/Anomaly_Detection" target="_blank" rel="noreferrer">
            View on GitHub
          </a>
        </div>
        {/* Add more projects here if needed */}
      </section>

      {/* Contact Section */}
      <section id="contact">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:meghashyamadimalla2003@gmail.com">meghashyamadimalla2003@gmail.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/megha-shyam-931327264/" target="_blank" rel="noreferrer">Meghashyam Adimallam</a></p>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2025 Meghashyam Adimallam</p>
      </footer>
    </div>
  );
}

export default App;
