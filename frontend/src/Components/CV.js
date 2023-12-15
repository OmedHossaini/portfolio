import React from 'react';


function CV() {
  const cvUrl = 'https://drive.google.com/file/d/1Qz2saNAkoROr9clEwWCxS0kL2NdxCh0S/view?usp=sharing';

  return (
    <section id="CV" className="cv-section">
      <div className="cv-container">
        <h2 className="cv-title">Curriculum Vitae</h2>
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
}

export default CV;
