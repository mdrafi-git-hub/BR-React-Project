import React from 'react';

function HomePage() {
  return (
    <div>
      {/* Navbar */}
      <nav style={styles.navbar}>
        <div style={styles.logo}>
          <span style={styles.logoHighlight}>BR</span>{' '}
          <span style={styles.logoText}>Architects</span>
        </div>
        <div style={styles.navLinks}>
          <a href="#projects" style={styles.navLink}>Projects</a>
          <a href="#about" style={styles.navLink}>About</a>
          <a href="#contact" style={styles.navLink}>Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <div style={styles.heroSection}>
        <h1 style={styles.heroText}>
          <span style={styles.heroTextHighlight}>BR</span>{' '}Architects
        </h1>
      </div>
    </div>
  );
}

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 5vw',
    backgroundColor: 'White',
    fontFamily: 'Arial, sans-serif',
    width: '100%',
    boxSizing: 'border-box',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1000,
    flexWrap: 'wrap'
  },
  logo: {
    fontWeight: 'bold',
    letterSpacing: '2px',
    marginBottom: '8px',
  },
  logoHighlight: {
    backgroundColor: 'black',
    color: 'white',
    padding: '4px 8px',
  },
  logoText: {
    fontWeight: 'normal',
  },
  navLinks: {
    display: 'flex',
    gap: '24px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  navLink: {
    textDecoration: 'none',
    color: '#000',
    fontSize: '16px',
    letterSpacing: '2px'
  },
  heroSection: {
    backgroundImage: 'url("https://www.w3schools.com/w3images/architect.jpg")',
    height: '100vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '64px',
    width: '100%',
    boxSizing: 'border-box',
  },
  heroText: {
    color: 'white',
    fontSize: '6vw',
    fontFamily: 'Arial, sans-serif',
    letterSpacing: '4px',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: '12px 24px',
    textAlign: 'center',
  },
  heroTextHighlight: {
    fontWeight: 'bold',
    backgroundColor: '#000',
    padding: '6px 10px',
  }
};

export default HomePage;
