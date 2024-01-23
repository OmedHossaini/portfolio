import React from 'react';

const CV = () => {
  const cvUrl = 'https://docs.google.com/document/d/1SpH3QyIbqqOBmkhOMKttgkMdyI0aqcTi/edit?usp=sharing&ouid=112978790762897057478&rtpof=true&sd=true';

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
