// import React from 'react';
// import person1 from '../assets/BR Image 1.jpg';
// import person2 from '../assets/BR Image 2.jpg';
// import person3 from '../assets/BR Image 3.jpg';
// import person4 from '../assets/BR Image 4.jpg';

// const About = () => {
//   const teamStyle = {
//     padding: '2rem',
//   };

//   const gridStyle = {
//     display: 'flex',
//     flexWrap: 'wrap',
//     gap: '1rem',
//     marginTop: '2rem',
//   };

//   const cardStyle = {
//     flex: '1 1 18%',
//     border: '1px solid #ddd',
//     padding: '2rem',
//     textAlign: 'center',
//     boxShadow: '0 0 10px rgba(0,0,0,0.1)',
//   };

//   const imgStyle = {
//     width: '100%',
//     height: 'auto',
//     objectFit: 'cover',
//   };

//   const buttonStyle = {
//     width: '100%',
//     padding: '0.5rem',
//     backgroundColor: '#eee',
//     border: 'none',
//     marginTop: '1rem',
//     cursor: 'pointer',
//   };



//   const grayText = {
//     color: 'gray',
//     margin: '0.5rem 0',
//   };

//   const teamData = [
//     {
//       img: person1,
//       name: 'Rafi',
//       role: 'Reaact JS Developer',
//       desc: 'Skills: HTML, CSS, JavaScipt, React JS, Git, Git Hub.',
//     },
//     {
//       img: person2,
//       name: 'Jane Doe',
//       role: 'Architect',
//       desc: 'Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.',
//     },
//     {
//       img: person3,
//       name: 'Siddu',
//       role: 'Reaact JS Developer',
//       desc: 'Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.',
//     },
//     {
//       img: person4,
//       name: 'Anil',
//       role: 'Reaact JS Developer',
//       desc: 'Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.',
//     },
//   ];

//   return (
//     <section style={teamStyle}>
//         <h2>About</h2>
//       <p>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
//       </p>
//       <div style={gridStyle}>
//         {teamData.map((person, index) => (
//           <div key={index} style={cardStyle}>
//             <img src={person.img} alt={person.name} style={imgStyle} />
//             <h3>{person.name}</h3>
//             <p style={grayText}>{person.role}</p>
//             <p>{person.desc}</p>
//             <button style={buttonStyle}>Contact</button>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };


// export default About;


import React from 'react';
import person1 from '../assets/BR Image 1.jpg';
import person2 from '../assets/BR Image 2.jpg';
import person3 from '../assets/BR Image 3.jpg';
import person4 from '../assets/BR Image 4.jpg';

const About = () => {
  const teamStyle = {
    padding: '2rem',
    maxWidth: '100%',
    margin: '0 auto',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '1.5rem',
    marginTop: '2rem',
  };

  const cardStyle = {
    border: '1px solid #ddd',
    padding: '1.5rem',
    textAlign: 'center',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    borderRadius: '8px',
    backgroundColor: '#fff',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'default',
  };

  const cardHoverStyle = {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
  };

  const imgStyle = {
    width: '100%',
    height: '220px',
    objectFit: 'cover',
    borderRadius: '6px',
    marginBottom: '1rem',
  };

  const buttonStyle = {
    width: '100%',
    padding: '0.5rem',
    backgroundColor: '#eee',
    border: 'none',
    marginTop: '1rem',
    cursor: 'pointer',
    borderRadius: '4px',
    transition: 'background-color 0.3s ease',
  };

  const buttonHoverStyle = {
    backgroundColor: '#ddd',
  };

  const grayText = {
    color: 'gray',
    margin: '0.5rem 0',
  };

  const teamData = [
    {
      img: person1,
      name: 'Rafi',
      role: 'React JS Developer',
      desc: 'Skills: HTML, CSS, JavaScript, React JS, Git, GitHub.',
    },
    {
      img: person2,
      name: 'Jane Doe',
      role: 'Architect',
      desc: 'Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.',
    },
    {
      img: person3,
      name: 'Siddu',
      role: 'React JS Developer',
      desc: 'Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.',
    },
    {
      img: person4,
      name: 'Anil',
      role: 'React JS Developer',
      desc: 'Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.',
    },
  ];

  // State for hover effect on cards and buttons (optional)
  const [hoveredCard, setHoveredCard] = React.useState(null);
  const [hoveredBtn, setHoveredBtn] = React.useState(null);

  return (
    <section style={teamStyle}>
      <h2>About</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...
      </p>

      <div style={gridStyle}>
        {teamData.map((person, index) => (
          <div
            key={index}
            style={{
              ...cardStyle,
              ...(hoveredCard === index ? cardHoverStyle : {}),
            }}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <img src={person.img} alt={person.name} style={imgStyle} />
            <h3>{person.name}</h3>
            <p style={grayText}>{person.role}</p>
            <p>{person.desc}</p>
            <button
              style={{
                ...buttonStyle,
                ...(hoveredBtn === index ? buttonHoverStyle : {}),
              }}
              onMouseEnter={() => setHoveredBtn(index)}
              onMouseLeave={() => setHoveredBtn(null)}
            >
              Contact
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
