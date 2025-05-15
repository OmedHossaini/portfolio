import React from 'react';
import { Link } from 'react-router-dom';


function HighlightedProjects() {
  const highlightedProjects = [
    {
      id: 'tori-stecum',
      title: 'Tori Stecum Traduction et Révision',
      description: 'Architected a React application with Context API for seamless bilingual state management. Built secure Node.js/Express backend with email integration and proper error handling.',
      image: './Tori.gif',
      technologies: ['JavaScript', 'HTML', 'CSS', 'Express', 'Node.js'],
      github: 'https://github.com/OmedHossaini/Tori-Stecum-Traduction-et-R-vison',
      liveLink: 'https://www.toristecumtraductionandrevision.site/'
    },
    {
      id: 'farmer-flow',
      title: 'Farmer Flow - PolyHacks 2025',
      description: 'Built React Native/TypeScript mobile app featuring weather forecasting, plant disease identification via camera, and inventory management with Firebase integration.',
      image: './p1.gif',
      technologies: ['TypeScript', 'Expo', 'Firebase', 'React Native', 'Express'],
      github: 'https://github.com/OmedHossaini',
      liveLink: null
    },
    {
      id: 'the-crib',
      title: 'The Crib',
      description: 'Architected a Flutter mobile app with Provider state management and real-time data synchronization. Implemented AWS Amplify integration for authentication, API, and storage.',
      image: './the-crib.gif',
      technologies: ['Dart', 'JavaScript', 'Flutter', 'AWS'],
      github: 'https://github.com/OmedHossaini',
      liveLink: null
    }
  ];

  return (
    <section className="highlighted-projects section" id="highlighted-projects">
      <h2 className="section-title">Highlighted Projects</h2>
      
      <div className="highlighted-projects__container bd-grid">
        {highlightedProjects.map((project) => (
          <div className="highlighted-project" key={project.id}>
            <div className="highlighted-project__img">
              <img src={project.image} alt={project.title} />
            </div>
            
            <div className="highlighted-project__content">
              <h3 className="highlighted-project__title">{project.title}</h3>
              
              <p className="highlighted-project__description">{project.description}</p>
              
              <div className="highlighted-project__technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="highlighted-project__tech">{tech}</span>
                ))}
              </div>
              
              <div className="highlighted-project__links">
                <a href={project.github} className="highlighted-project__link github" target="_blank" rel="noopener noreferrer">
                  <i className='bx bxl-github'></i> GitHub
                </a>
                
                {project.liveLink && (
                  <a href={project.liveLink} className="highlighted-project__link demo" target="_blank" rel="noopener noreferrer">
                    <i className='bx bx-link-external'></i> Live Demo
                  </a>
                )}
                
                <Link to={`/project/${project.id}`} className="highlighted-project__link details">
                  <i className='bx bx-detail'></i> View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HighlightedProjects;