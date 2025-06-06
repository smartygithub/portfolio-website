import React from 'react';

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: 1.6, maxWidth: '800px', margin: 'auto', padding: '20px' }}>
      <h1>👋 Hi, I’m Meghashyam</h1>
      <p>I’m a Data Science & AI enthusiast passionate about Machine Learning, Python, and solving real-world problems through data-driven solutions.</p>

      <a
        href="https://github.com/smartygithub"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none' }}
      >
        <button style={{ margin: '20px 0', padding: '10px 20px', background: '#333', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
          View My GitHub
        </button>
      </a>

      <h2>💼 My Projects</h2>

      <div style={{ background: '#f4f4f4', padding: '20px', borderRadius: '10px', marginBottom: '20px' }}>
        <h3>🕵️ Anomaly Detection in Credit Card Transactions</h3>
        <p>
          A machine learning project developed as part of CS 685/785. It uses SVD-based anomaly detection to identify fraudulent transactions in an imbalanced credit card dataset. Techniques include dimensionality reduction, reconstruction error thresholding, logistic regression, and clustering analysis.
        </p>
        <p><strong>Tech Stack:</strong> Python, Jupyter, NumPy, Pandas, Scikit-learn, Matplotlib, Seaborn</p>
        <a href="https://github.com/smartygithub/Anomaly_Detection" target="_blank" rel="noopener noreferrer">
          🔗 View on GitHub
        </a>
      </div>

      {/* Add more project blocks here in same format if needed */}

      <h2>📫 Contact Me</h2>
      <ul>
        <li>
          🔗 LinkedIn:{" "}
          <a href="https://www.linkedin.com/in/megha-shyam-931327264/" target="_blank" rel="noopener noreferrer">
            Meghashyam Adimallam
          </a>
        </li>
        <li>
          📧 Email:{" "}
          <a href="mailto:meghashyamadimalla2003@gmail.com">
            meghashyamadimalla2003@gmail.com
          </a>
        </li>
      </ul>

      <footer style={{ marginTop: '40px', fontSize: '0.9em', color: '#555' }}>
        <hr />
        <p>&copy; {new Date().getFullYear()} Meghashyam Adimallam. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
