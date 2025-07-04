import React from 'react';

function Extracurricular() {
  return (
    <section className="extra section" id="extra">
      <h2 className="section-title">Extra-Curricular Activities</h2>

      <div className="extra__container bd-grid">
        <div className="extra__item">
          <div className="extra__icon">
            <i className='bx bx-trophy'></i>
          </div>
          <div className="extra__content">
            <h3 className="extra__title">Hackathons</h3>
            <p className="extra__description">
              Participated in 3 hackathons, including PolyHacks 2025 where our team won first place in the "Above Ground" category.
            </p>
            <a href="#" className="extra__link">Website</a>
          </div>
        </div>

        <div className="extra__item">
          <div className="extra__icon">
            <i className='bx bx-certification'></i>
          </div>
          <div className="extra__content">
            <h3 className="extra__title">AWS Cloud Practitioner</h3>
            <p className="extra__description">
              Completed the AWS Cloud Practitioner certificate, validating my knowledge of AWS Cloud concepts, services, and architecture.
            </p>
            <a href="#" className="extra__link">Certificate</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Extracurricular;