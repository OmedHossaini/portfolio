import React from 'react';

function Projects() {
  const projects = [
    {
      id: 4,
      title: "R.O.B.O Watches",
      image: "./clegj6g4f51c72urtetg - Trim.gif",
      description: "E-commerce platform for watches with cart management and persistent storage. Built with a RESTful Node server for efficient updates.",
      technologies: ["Node.js", "React", "RESTful API", "Database Integration"],
      github: "https://github.com/OmedHossaini/E-Commerce-ROBO"
    },
    {
      id: 5,
      title: "HD Academy Notes",
      image: "./HD.gif",
      description: "Secure MERN app with JWT-based authentication. Includes user registration/login with Bcrypt password hashing and seamless note management.",
      technologies: ["React.js", "Node.js", "MongoDB", "Express", "JWT"],
      github: "https://github.com/OmedHossaini/HDAcademy",
      backendGithub: "https://github.com/OmedHossaini/HDAcademy-api",
      liveLink: "https://hdacademynotes.onrender.com/"
    },
    {
      id: 6,
      title: "Workout Tracker App",
      image: "final project video - Made with Clipchamp.gif",
      description: "Application that allows users to track their workouts, manage profiles, and set fitness goals with progress visualization.",
      technologies: ["React.js", "API Integration", "CSS"],
      github: "https://github.com/OmedHossaini/Final_Project"
    }
  ];

  return (
    <section className="project section" id="project">
      <h2 className="section-title">Projects</h2>

      <div className="project__container bd-grid">
        {projects.map((project) => (
          <div className="project__item" key={project.id}>
            {project.liveLink ? (
              <a href={project.liveLink} className="project__img" target="_blank" rel="noopener noreferrer">
                <img src={project.image} alt={project.title} />
              </a>
            ) : (
              <div className="project__img">
                <img src={project.image} alt={project.title} />
              </div>
            )}

            <div className="project__text">
              <h3>{project.title}</h3>
              
              <div className="project__links">
                <a href={project.github} className="github-button" target="_blank" rel="noopener noreferrer">
                  <i className='bx bxl-github'></i> GitHub
                </a>
                
                {project.backendGithub && (
                  <a href={project.backendGithub} className="github-button" target="_blank" rel="noopener noreferrer">
                    <i className='bx bxl-github'></i> GitHub Backend
                  </a>
                )}
                
                {project.liveLink && (
                  <a href={project.liveLink} className="live-button" target="_blank" rel="noopener noreferrer">
                    <i className='bx bx-link-external'></i> Live Demo
                  </a>
                )}
              </div>

              <p className="project__description">{project.description}</p>
              
              <div className="project__technologies">
                <p><strong>Technologies used:</strong></p>
                <div className="project__tech-tags">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="project__tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;