function App() {
  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <h1 style={styles.heading}>Hi, I’m Meghashyam 👋</h1>
      <p style={styles.subheading}>
        I’m a Data Science & AI enthusiast passionate about Machine Learning, Python, and solving real-world problems.
      </p>
      <a
        href="https://github.com/smartygithub"
        target="_blank"
        rel="noopener noreferrer"
        style={styles.button}
      >
        View My Projects
      </a>

      {/* Projects Section */}
      <hr style={{ margin: '40px 0' }} />
      <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>💼 My Projects</h2>

      <div style={styles.projectCard}>
        <h3>Anomaly Detection</h3>
        <p>
          A machine learning project using SVD to detect fraudulent transactions in credit card data.
        </p>
        <a
          href="https://github.com/smartygithub/Anomaly_Detection"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.button}
        >
          View on GitHub
        </a>
      </div>

      {/* Skills Section */}
      <hr style={{ margin: '40px 0' }} />
      <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>🧠 Skills</h2>

      <ul style={styles.skillsList}>
        <li>Python</li>
        <li>Machine Learning</li>
        <li>Deep Learning</li>
        <li>SQL</li>
        <li>Power BI</li>
        <li>React.js</li>
        <li>Git & GitHub</li>
        <li>AWS Cloud Practitioner</li>
      </ul>

      {/* Contact Section */}
      <hr style={{ margin: '40px 0' }} />
      <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>📬 Contact</h2>
      <p style={styles.subheading}>Let's connect!</p>

      <div style={styles.contactLinks}>
        <a
          href="mailto:your.email@example.com"
          style={styles.contactLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Email
        </a>
        <a
          href="https://github.com/smartygithub"
          style={styles.contactLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/your-linkedin/"
          style={styles.contactLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    paddingTop: '60px',
    paddingLeft: '20px',
    paddingRight: '20px',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '10px',
  },
  subheading: {
    fontSize: '1.2rem',
    color: '#555',
    marginBottom: '20px',
  },
  button: {
    display: 'inline-block',
    textDecoration: 'none',
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '5px',
    fontWeight: 'bold',
  },
  projectCard: {
    border: '1px solid #ddd',
    padding: '20px',
    marginBottom: '20px',
    borderRadius: '10px',
    maxWidth: '600px',
    margin: '0 auto 40px',
    backgroundColor: '#f9f9f9',
  },
  skillsList: {
    listStyle: 'none',
    padding: 0,
    margin: '0 auto',
    maxWidth: '400px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '10px',
    fontSize: '1.1rem',
    color: '#333',
  },
  contactLinks: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '20px',
  },
  contactLink: {
    textDecoration: 'none',
    color: '#007bff',
    fontSize: '1.1rem',
    fontWeight: 'bold',
  },
};

export default App;
