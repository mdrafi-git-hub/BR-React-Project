import React from 'react';

const projects = [
  { title: 'Summer House', url: 'https://www.w3schools.com/w3images/house5.jpg' },
  { title: 'Brick House', url: 'https://www.w3schools.com/w3images/house2.jpg' },
  { title: 'Renovated', url: 'https://www.w3schools.com/w3images/house3.jpg' },
  { title: 'Barn House', url: 'https://www.w3schools.com/w3images/house4.jpg' },
  { title: 'Summer House', url: 'https://www.w3schools.com/w3images/house2.jpg' },
  { title: 'Brick House', url: 'https://www.w3schools.com/w3images/house5.jpg' },
  { title: 'Renovated', url: 'https://www.w3schools.com/w3images/house4.jpg' },
  { title: 'Barn House', url: 'https://www.w3schools.com/w3images/house3.jpg' },
  { title: 'Brick House', url: 'https://www.w3schools.com/w3images/house2.jpg' },
   { title: 'Brick House', url: 'https://www.w3schools.com/w3images/house5.jpg' },
];

function ProjectGallery() {
  return (
    <div style={{ padding: '80px 40px', maxWidth: '100%', margin: '0 auto' }}>
      <h2
        style={{
          fontFamily: 'Arial, sans-serif',
          fontWeight: 'normal',
          letterSpacing: '2px',
          marginBottom: '20px',
          textAlign: 'center',
        }}
      >
        Projects
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '16px',
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              position: 'relative',
              borderRadius: '10px',
              overflow: 'hidden',
              cursor: 'pointer',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.2)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
            }}
          >
            <img
              src={project.url}
              alt={project.title}
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                borderRadius: '10px',
                transition: 'transform 0.3s ease',
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: '8px',
                left: '8px',
                backgroundColor: 'rgba(0,0,0,0.7)',
                color: '#fff',
                padding: '6px 12px',
                fontSize: '14px',
                fontFamily: 'Arial, sans-serif',
                borderRadius: '5px',
              }}
            >
              {project.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectGallery;
