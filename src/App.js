import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      {/* 🔝 Navigation Bar */}
      <nav style={styles.nav}>
        <a href="#about" style={styles.link}>About</a>
        <a href="#work" style={styles.link}>My Work</a>
        <a href="#resume" style={styles.link}>Resume</a>
        <a href="#contact" style={styles.link}>Contact</a>
      </nav>

      {/* 🙋‍♂️ About Section */}
      <section id="about" style={styles.section}>
        <h1>Hi, I’m Meghashyam 👋</h1>
        <p>
          I’m a Data Science & AI enthusiast passionate about solving real-world problems using
          Machine Learning, Python, and Analytics.
        </p>
      </section>

      {/* 💼 My Work Section */}
      <section id="work" style={styles.section}>
        <h2>💼 My Projects</h2>
        <h3>Anomaly Detection in Credit Card Transactions</h3>
        <p>
          A machine learning project that uses SVD-based anomaly detection to flag fraudulent
          transactions.
          <br />
          <a
            href="https://github.com/smartygithub/Anomaly_Detection"
            target="_blank"
            rel="noreferrer"
          >
            🔗 View Project on GitHub
          </a>
        </p>
        {/* Add more projects below */}
      </section>

      {/* 📄 Resume Section */}
      <section id="resume" style={styles.section}>
        <h2>📄 Resume</h2>
        <p>
          View or download my resume here:
          <br />
          <a
            href="https://drive.google.com/your-resume-link"
            target="_blank"
            rel="noreferrer"
          >
            📎 View Resume
          </a>
        </p>
      </section>

      {/* 📬 Contact Section */}
      <section id="contact" style={styles.section}>
        <h2>📬 Contact</h2>
        <p>
          📧 Email:{" "}
          <a href="mailto:meghashyamadimalla2003@gmail.com">
            meghashyamadimalla2003@gmail.com
          </a>
          <br />
          🔗 LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/megha-shyam-931327264/"
            target="_blank"
            rel="noreferrer"
          >
            Meghashyam Adimallam
          </a>
        </p>
      </section>
    </div>
  );
}

const styles = {
  nav: {
    position: "fixed",
    top: 0,
    width: "100%",
    backgroundColor: "#222",
    padding: "1rem",
    display: "flex",
    justifyContent: "center",
    gap: "2rem",
    zIndex: 1000,
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
  },
  section: {
    padding: "100px 20px",
    maxWidth: "800px",
    margin: "auto",
  },
};

export default App;
