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
              <span className="skills__percentage">1 Year</span>
            </div>
          </div>

          <div className="skills__data">
            <div className="skills__names">
              <i className='bx bxl-css3 skills__icon'></i>
              <span className="skills__name">CSS3</span>
            </div>
            <div className="skills__bar skills__css"></div>
            <div>
              <span className="skills__percentage">1 Year</span>
            </div>
          </div>

          <div className="skills__data">
            <div className="skills__names">
              <i className='bx bxl-javascript skills__icon'></i>
              <span className="skills__name">JavaScript</span>
            </div>
            <div className="skills__bar skills__js"></div>
            <div>
              <span className="skills__percentage">1 Year</span>
            </div>
          </div>


        <div>
          <div className="skills__data">
            <div className="skills__names">
            <i className='bx bxl-mongodb skills__icon'></i>
              <span className="skills__name">MongoDB</span>
            </div>
            <div className="skills__bar skills__mongodb"></div>
            <div>
              <span className="skills__percentage">1 Year</span>
            </div>
          </div>

          <div className="skills__data">
            <div className="skills__names">
              <i className='bx bxl-github skills__icon'></i>
              <i className='bx bxl-git skills__icon'></i>
              <span className="skills__name">Git & GitHub</span>
            </div>
            <div className="skills__bar skills__github"></div>
            <div>
              <span className="skills__percentage">1 Year</span>
            </div>
          </div>

          <div className="skills__data">
            <div className="skills__names">
              <i className='bx bxl-yarn skills__icon'></i>
              <span className="skills__name">Yarn & npm</span>
            </div>
            <div className="skills__bar skills__yarn"></div>
            <div>
              <span className="skills__percentage">1 Year</span>
            </div>
          </div>
          <div className="skills__data">
            <div className="skills__names">
            <i className='bx bxl-react skills__icon'></i>
              <span className="skills__name">React.js</span>
            </div>
            <div className="skills__bar skills__react"></div>
            <div>
              <span className="skills__percentage">1 Year</span>
            </div>
          </div>
          <div className="skills__data">
            <div className="skills__names">
              <i className='bx bxl-yarn skills__icon'></i>
              <span className="skills__name">Node.js</span>
            </div>
            <div className="skills__bar skills__node"></div>
            <div>
              <span className="skills__percentage">1 Year</span>
            </div>
          </div>
        </div>
      </div>
      </div>

      <p className="skills__text skills__additional-info">This is not an exhaustive list, and I'm always excited to learn and explore new technologies.</p>
    </section>
  );
}

export default Skills;
