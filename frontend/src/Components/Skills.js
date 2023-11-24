import React from 'react';

function Skills() {
  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">Skills</h2>

      <div className="skills__container bd-grid">
        <div>
          <h2 className="skills__subtitle">Professional Skills</h2>
          <p className="skills__text">As a full-stack web developer, I've gained experience with a diverse set of languages and frameworks. Below are some of the key technologies I've worked with:</p>

          <div className="skills__data">
            <div className="skills__names">
              <i className='bx bxl-html5 skills__icon'></i>
              <span className="skills__name">HTML5</span>
            </div>
            <div className="skills__bar skills__html"></div>
            <div>
              <span className="skills__percentage"></span>
            </div>
          </div>

          <div className="skills__data">
            <div className="skills__names">
              <i className='bx bxl-css3 skills__icon'></i>
              <span className="skills__name">CSS3</span>
            </div>
            <div className="skills__bar skills__css"></div>
            <div>
              <span className="skills__percentage"></span>
            </div>
          </div>

          <div className="skills__data">
            <div className="skills__names">
              <i className='bx bxl-javascript skills__icon'></i>
              <span className="skills__name">JavaScript</span>
            </div>
            <div className="skills__bar skills__js"></div>
            <div>
              <span className="skills__percentage"></span>
            </div>
          </div>
        </div>

        <div className="additional-skills">
          <h2 className="skills__subtitle">Additional Skills</h2>
          <p className="skills__text">I work with additional technologies to enhance my skills as a developer. Some of these include:</p>
          <p className="skills__text">MongoDB</p>
          <p className="skills__text">Git & GitHub</p>
          <p className="skills__text">Yarn</p>
        </div>
      </div>

      <p className="skills__text skills__additional-info">This is not an exhaustive list, and I'm always excited to learn and explore new technologies.</p>
    </section>
  );
}

export default Skills;
