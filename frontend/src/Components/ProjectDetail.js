import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';


function ProjectDetail() {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);
  
  // Project data - in a real app, this might come from an API or context
  const projectsData = [
    {
      id: 'tori-stecum',
      title: 'Tori Stecum Traduction et Révision',
      description: 'Architected a React application with Context API for seamless bilingual state management. Built secure Node.js/Express backend with email integration and proper error handling.',
      fullDescription: `
        <p>Tori Stecum Traduction et Révision is a freelance translation and revision website offering services for documents to be translated from French to English or vice versa.</p>
        
        <p>As the full-stack developer for this project, I was responsible for designing and implementing both the frontend and backend systems to create a seamless bilingual experience.</p>
        
        <h3>Key Features:</h3>
        <ul>
          <li>Bilingual website with seamless language switching using React Context API</li>
          <li>Secure contact form with email integration using Nodemailer</li>
          <li>Custom animations and transitions to enhance user experience</li>
          <li>Responsive design that works on all device sizes</li>
          <li>SEO optimization for better visibility</li>
          <li>CI/CD pipeline with Vercel and Render for automated deployments</li>
        </ul>
        
        <h3>Technical Implementation:</h3>
        <ul>
          <li>Implemented React Context API to manage language state throughout the application</li>
          <li>Built a secure Node.js/Express backend with proper validation and error handling</li>
          <li>Created responsive UI with custom CSS animations and component-based architecture</li>
          <li>Implemented email integration for contact form submissions</li>
          <li>Set up proper error handling for both frontend and backend</li>
          <li>Configured CI/CD pipeline with Vercel/Render deployment</li>
          <li>Managed environment variables for secure API keys and credentials</li>
        </ul>
        
        <h3>Challenges and Solutions:</h3>
        <p>One of the main challenges was creating a seamless bilingual experience without sacrificing performance. I solved this by implementing a lightweight context-based language system that efficiently switches between French and English content without requiring page reloads.</p>
        
        <p>Another challenge was securing the contact form against spam and abuse. I implemented server-side validation, rate limiting, and email verification to ensure the system was robust and secure.</p>
      `,
      image: '/Tori1.png', // Use absolute path from public folder (note the leading slash)
      additionalImages: ['/Tori2.png', '/Tori3.png', '/Tori4.png', '/Tori5.png'],
      technologies: ['JavaScript', 'HTML', 'CSS', 'Express', 'Node.js', 'React', 'Context API', 'Nodemailer'],
      github: 'https://github.com/OmedHossaini/Tori-Stecum-Traduction-et-R-vison',
      liveLink: 'https://www.toristecumtraductionandrevision.site/'
    },
    {
      id: 'farmer-flow',
      title: 'Farmer Flow - PolyHacks 2025',
      description: 'Built React Native/TypeScript mobile app featuring weather forecasting, plant disease identification via camera, and inventory management with Firebase integration.',
      fullDescription: `
        <p>Farmer Flow is an innovative mobile application developed during the PolyHacks 2025 hackathon, where our team won first place in the "Above Ground" category.</p>
        
        <p>This app aims to revolutionize farming by providing intelligent tools for modern farmers, combining technology with agricultural expertise.</p>
        
        <h3>Key Features:</h3>
        <ul>
          <li>Real-time weather forecasting specific to farm location</li>
          <li>Plant disease identification using camera and machine learning</li>
          <li>Comprehensive inventory management system</li>
          <li>Real-time data synchronization across devices</li>
          <li>Interactive data visualization showing historical trends</li>
          <li>AI-powered chatbot advisor for farming guidance</li>
        </ul>
        
        <h3>Technical Implementation:</h3>
        <ul>
          <li>Built with React Native and TypeScript for cross-platform functionality</li>
          <li>Utilized Expo for streamlined development and deployment</li>
          <li>Integrated Firebase for authentication and real-time database</li>
          <li>Implemented custom contexts to manage authentication flow across platforms</li>
          <li>Created interactive data visualization components with Chart.js</li>
          <li>Developed AI-powered chatbot using OpenAI API</li>
          <li>Implemented camera integration for plant disease identification</li>
        </ul>
        
        <h3>Challenges and Solutions:</h3>
        <p>The biggest challenge was creating a reliable plant disease identification system within the time constraints of the hackathon. We solved this by combining pre-trained image recognition models with a simplified classification system focused on the most common plant diseases.</p>
        
        <p>Another challenge was ensuring the app would work in areas with limited connectivity, which is common in rural farming regions. We implemented offline-first capabilities with background synchronization to address this issue.</p>
      `,
      image: '../p1.gif',
      additionalImages: ['../p1.png', '../p2.png', '../p3.png'],
      technologies: ['TypeScript', 'JavaScript', 'Expo', 'Firebase', 'React Native', 'Express', 'Node.js', 'Chart.js', 'OpenAI API'],
      github: 'https://github.com/OmedHossaini',
      liveLink: null,
      award: 'First Place - "Above Ground" Category, PolyHacks 2025'
    },
    {
      id: 'the-crib',
      title: 'The Crib',
      description: 'Architected a Flutter mobile app with Provider state management and real-time data synchronization. Implemented AWS Amplify integration for authentication, API, and storage.',
      fullDescription: `
        <p>The Crib is a comprehensive mobile application designed to simplify home management and organization, offering users a centralized platform to manage their household tasks, inventory, and maintenance schedules.</p>
        
        <h3>Key Features:</h3>
        <ul>
          <li>User authentication and profile management</li>
          <li>Home inventory tracking and organization</li>
          <li>Maintenance scheduling and reminders</li>
          <li>Shopping list and budget management</li>
          <li>Family task assignments and tracking</li>
          <li>Real-time data synchronization across multiple devices</li>
          <li>Offline capability for use without internet connection</li>
        </ul>
        
        <h3>Technical Implementation:</h3>
        <ul>
          <li>Built with Flutter for cross-platform deployment</li>
          <li>Implemented Provider pattern for efficient state management</li>
          <li>Used Dart for all application logic and UI</li>
          <li>Integrated AWS Amplify for backend services</li>
          <li>Implemented authentication with social login options</li>
          <li>Created offline-first architecture with background synchronization</li>
          <li>Designed modular services using singleton patterns</li>
          <li>Built advanced UI with custom animations and responsive design</li>
        </ul>
        
        <h3>Challenges and Solutions:</h3>
        <p>One significant challenge was ensuring a consistent user experience across different device sizes and operating systems. I addressed this by implementing a responsive design system with Flutter that automatically adapts to different screen sizes while maintaining aesthetic consistency.</p>
        
        <p>Another challenge was managing data synchronization between offline and online states. I implemented a robust queueing system that stores changes locally and syncs them when a connection becomes available, ensuring data integrity across all usage scenarios.</p>
      `,
      image: '../crib1.png',
      additionalImages: ['../crib2.png', '../crib3.png', '../crib4.png'],
      technologies: ['Dart', 'JavaScript', 'Flutter', 'AWS', 'Provider', 'AWS Amplify', 'DynamoDB', 'Cognito'],
      github: 'https://github.com/OmedHossaini',
      liveLink: null
    }
  ];

  useEffect(() => {
    // Find the project that matches the URL parameter
    const foundProject = projectsData.find(p => p.id === projectId);
    
    // If found, set it as the current project
    if (foundProject) {
      setProject(foundProject);
      // Scroll to top when project changes
      window.scrollTo(0, 0);
    }
  }, [projectId]);

  if (!project) {
    return (
      <div className="project-detail__not-found">
        <h2>Project Not Found</h2>
        <p>The project you're looking for doesn't exist or has been removed.</p>
        <Link to="/" className="project-detail__back-button">Back to Home</Link>
      </div>
    );
  }

  return (
    <section className="project-detail section">
      <div className="project-detail__container">
        <div className="project-detail__header">
          <Link to="/#highlighted-projects" className="project-detail__back">
            <i className='bx bx-left-arrow-alt'></i> Back to Projects
          </Link>
          <h1 className="project-detail__title">{project.title}</h1>
        </div>

        <div className="project-detail__hero">
          <img src={project.image} alt={project.title} className="project-detail__main-image" />
        </div>

        <div className="project-detail__content">
          <div className="project-detail__info">
            <div className="project-detail__links">
              <a href={project.github} className="project-detail__link github" target="_blank" rel="noopener noreferrer">
                <i className='bx bxl-github'></i> View on GitHub
              </a>
              
              {project.liveLink && (
                <a href={project.liveLink} className="project-detail__link demo" target="_blank" rel="noopener noreferrer">
                  <i className='bx bx-link-external'></i> Live Demo
                </a>
              )}
            </div>

            {project.award && (
              <div className="project-detail__award">
                <i className='bx bx-trophy'></i>
                <span>{project.award}</span>
              </div>
            )}
            
            <div className="project-detail__tech-stack">
              <h3>Technologies Used</h3>
              <div className="project-detail__technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="project-detail__tech">{tech}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="project-detail__description">
            <div dangerouslySetInnerHTML={{ __html: project.fullDescription }} />
          </div>
        </div>

        {/* Additional project photos, if available */}
        {project.additionalImages && project.additionalImages.length > 0 && (
          <div className="project-detail__gallery">
            <h3>Project Gallery</h3>
            <div className="project-detail__images">
              {project.additionalImages.map((img, index) => (
                <div className="project-detail__image-container" key={index}>
                  <img src={img} alt={`${project.title} screenshot ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="project-detail__navigation">
          <h3>Explore Other Projects</h3>
          <div className="project-detail__other-projects">
            {projectsData
              .filter(p => p.id !== projectId)
              .map(p => (
                <Link to={`/project/${p.id}`} className="project-detail__other-project" key={p.id}>
                  <div className="project-detail__other-project-img">
                    <img src={p.image} alt={p.title} />
                  </div>
                  <h4>{p.title}</h4>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectDetail;