import React, { useState } from 'react';
import mapImg from '../assets/Map Image.jpg';

const Contact = () => {
  const containerStyle = {
    maxWidth: '100%',
    margin: '0 auto',
    padding: '2rem',
    fontFamily: 'sans-serif',
  };

  const headingStyle = {
    marginBottom: '0.5rem',
    fontSize: '1.5rem',
  };

  const paragraphStyle = {
    marginBottom: '1.5rem',
    fontSize: '1rem',
    color: '#333',
  };

  const formStyle = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  };

  const inputStyle = {
    padding: '0.75rem',
    fontSize: '1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    width: '100%',
    boxSizing: 'border-box',
  };

  const buttonStyle = {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#000',
    color: '#fff',
    border: 'none',
    fontWeight: 'bold',
    cursor: 'pointer',
    textTransform: 'uppercase',
    transition: 'background-color 0.3s ease',
  };

  const buttonHoverStyle = {
    backgroundColor: '#333',
  };

  const mapImageStyle = {
  marginTop: '2rem',
  width: '100%',
  height: 'auto',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0,0,0,0.1)',
};

  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Contact</h2>
      <hr />
      <p style={paragraphStyle}>Let's get in touch and talk about your next project.</p>

      <form style={formStyle}>
        <input type="text" placeholder="Name" style={inputStyle} required />
        <input type="email" placeholder="Email" style={inputStyle} required />
        <input type="text" placeholder="Subject" style={inputStyle} required />
        <textarea placeholder="Comment" rows="5" style={inputStyle} required></textarea>

        <button
          type="submit"
          style={isHovered ? { ...buttonStyle, ...buttonHoverStyle } : buttonStyle}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Send Message
        </button>
      </form> 
      <img src={mapImg} alt="Map" style={mapImageStyle} />
    </div>
  );
};

export default Contact;
