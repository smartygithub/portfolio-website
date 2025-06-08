import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <nav>
        <h1>Meghashyam</h1>
        <div>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero">
        <h2>Hi, I’m Meghashyam 👋</h2>
        <p>
          Data Science & AI enthusiast passionate about Machine Learning,
          Python, and solving real-world problems.
        </p>
        <a
          href="/Aspiring_Data_Scientist_Experienced.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>View Resume</button>
        </a>
      </section>

      {/* About Section */}
      <section id="about">
        <h2>About Me</h2>
        <p>
          I am currently pursuing my interests in machine learning and AI with a
          strong foundation in Python and statistics. My goal is to solve
          real-world problems through data.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <h2>💼 Projects</h2>
        <div className="projects-grid">
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

          <div className="project-card">
            <h3>Sales Dashboard</h3>
            <p>
              Interactive dashboard using Power BI to visualize sales trends and
              KPIs.
            </p>
            <a
              href="https://github.com/smartygithub/sales-dashboard"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </div>

          <div className="project-card">
            <h3>Credit Risk Modeling</h3>
            <p>
              Logistic regression model to assess loan default risk using credit
              history data.
            </p>
            <a
              href="https://github.com/smartygithub/credit-risk"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <h2>📫 Contact</h2>
        <p>
          Email:{" "}
          <a href="mailto:meghashyamadimalla2003@gmail.com">
            meghashyamadimalla2003@gmail.com
          </a>
        </p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/megha-shyam-931327264/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Meghashyam Adimallam
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a
            href="https://github.com/smartygithub"
            target="_blank"
            rel="noopener noreferrer"
          >
            smartygithub
          </a>
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
