import React from 'react';

const CV = () => {
  const cvUrl = 'https://drive.google.com/file/d/1fLe0vSTgYbJU7KRV5upwqQ_1xOJfT8Rs/view?usp=sharing';

  return (
    <section id="CV" className="cv-section">
      <div className="cv-container">
        <p className="cv-description">
          Explore my qualifications and experience by downloading my CV.
        </p>
        <a
          href={cvUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="cv-download-button"
        >
          Download CV
        </a>
      </div>
    </section>
  );
};

const CVPage = () => {
  return (
    <div id="cv-page" className="cv-page-container">
      <CV />
    </div>
  );
};

export default CVPage;
