import React from 'react';

const ProjectCard = ({ 
  title, 
  image, 
  description, 
  technologies, 
  github, 
  backendGithub, 
  liveLink 
}) => {
  return (
    <div className="project__item">
      {liveLink ? (
        <a href={liveLink} className="project__img" target="_blank" rel="noopener noreferrer">
          <img src={image} alt={title} />
        </a>
      ) : (
        <div className="project__img">
          <img src={image} alt={title} />
        </div>
      )}

      <div className="project__text">
        <h3 className="project__title">{title}</h3>
        
        <div className="project__links">
          <a href={github} className="github-button" target="_blank" rel="noopener noreferrer">
            <i className='bx bxl-github'></i> GitHub
          </a>
          
          {backendGithub && (
            <a href={backendGithub} className="github-button" target="_blank" rel="noopener noreferrer">
              <i className='bx bxl-github'></i> GitHub Backend
            </a>
          )}
          
          {liveLink && (
            <a href={liveLink} className="live-button" target="_blank" rel="noopener noreferrer">
              <i className='bx bx-link-external'></i> Live Demo
            </a>
          )}
        </div>

        <p className="project__description">{description}</p>
        
        <div className="project__technologies">
          <p><strong>Technologies used:</strong></p>
          <div className="project__tech-tags">
            {technologies.map((tech, index) => (
              <span key={index} className="project__tech-tag">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;