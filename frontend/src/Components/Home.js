import React, { useState, useEffect } from 'react';

function Home() {
  const [professionIndex, setProfessionIndex] = useState(0);
  const professions = [
    'Full Stack Developer', 
    'JavaScript Developer', 
    'React.js Developer',
    'Software Engineer'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProfessionIndex((prevIndex) => (prevIndex + 1) % professions.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="home bd-grid" id="home">
      <div className="home__data">
        <h1 className="home__title">
          Hi,<br />
          I'm <span className="home__title-color">Omed</span><br />
          a {professions[professionIndex]}
        </h1>
        <p className="home__description">
          Based in Montreal, I specialize in creating responsive 
          web applications with modern technologies.
        </p>
        <a href="#contact" className="home__button">Contact Me</a>
      </div>

      <div className="home__social">
        <a href="https://www.linkedin.com/in/omed-hossaini-a25b942a0/" 
           className="home__social-icon" 
           target="_blank" 
           rel="noopener noreferrer">
          <i className='bx bxl-linkedin'></i>
        </a>
        <a href="https://github.com/OmedHossaini" 
           className="home__social-icon" 
           target="_blank" 
           rel="noopener noreferrer">
          <i className='bx bxl-github'></i>
        </a>
        <a href="mailto:omed_hossaini@outlook.com" 
           className="home__social-icon">
          <i className='bx bx-mail-send'></i>
        </a>
      </div>

      <div className="home__img">
        <svg className="home__blob" viewBox="0 0 479 467">
          <mask id="mask0" mask-type="alpha">
            <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024"></path>
          </mask>
          <g mask="url(#mask0)">
            <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024"></path>
            <image className="home__blob-img" x="87" y="60" href="./profilepci3.png" />
          </g>
        </svg>
      </div>
    </section>
  );
}

export default Home;