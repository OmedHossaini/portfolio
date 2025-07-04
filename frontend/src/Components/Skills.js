import React from 'react';

function Skills() {
  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">Skills</h2>

      <div className="skills__container bd-grid">
        <div>
          <h2 className="skills__subtitle">Professional Skills</h2>
          <p className="skills__text">
            As a full-stack web developer, I've gained experience with a diverse set 
            of languages and frameworks. Below are some of the key technologies I've worked with:
          </p>

          <div className="skills__categories">
            <div className="skills__category">
              <h3 className="skills__category-title">Languages</h3>
              
              <div className="skills__data">
                <div className="skills__names">
                  <i className='bx bxl-javascript skills__icon'></i>
                  <span className="skills__name">JavaScript</span>
                </div>
                <div className="skills__bar skills__js"></div>
              </div>

              <div className="skills__data">
                <div className="skills__names">
                  <i className='bx bxl-typescript skills__icon'></i>
                  <span className="skills__name">TypeScript</span>
                </div>
                <div className="skills__bar skills__ts"></div>
              </div>

              <div className="skills__data">
                <div className="skills__names">
                  <i className='bx bxl-html5 skills__icon'></i>
                  <span className="skills__name">HTML5</span>
                </div>
                <div className="skills__bar skills__html"></div>
              </div>

              <div className="skills__data">
                <div className="skills__names">
                  <i className='bx bxl-css3 skills__icon'></i>
                  <span className="skills__name">CSS3</span>
                </div>
                <div className="skills__bar skills__css"></div>
              </div>

              <div className="skills__data">
                <div className="skills__names">
                  <i className='bx bxl-python skills__icon'></i>
                  <span className="skills__name">Python</span>
                </div>
                <div className="skills__bar skills__python"></div>
              </div>

              <div className="skills__data">
                <div className="skills__names">
                  <i className='bx bx-code skills__icon'></i>
                  <span className="skills__name">Dart</span>
                </div>
                <div className="skills__bar skills__dart"></div>
              </div>

              <div className="skills__data">
                <div className="skills__names">
                  <i className='bx bx-data skills__icon'></i>
                  <span className="skills__name">PostgreSQL</span>
                </div>
                <div className="skills__bar skills__sql"></div>
              </div>
            </div>

            <div className="skills__category">
              <h3 className="skills__category-title">Frameworks</h3>
              
              <div className="skills__data">
                <div className="skills__names">
                  <i className='bx bxl-react skills__icon'></i>
                  <span className="skills__name">React</span>
                </div>
                <div className="skills__bar skills__react"></div>
              </div>

              <div className="skills__data">
                <div className="skills__names">
                  <i className='bx bxl-redux skills__icon'></i>
                  <span className="skills__name">Redux</span>
                </div>
                <div className="skills__bar skills__redux"></div>
              </div>

              <div className="skills__data">
                <div className="skills__names">
                  <i className='bx bxl-nodejs skills__icon'></i>
                  <span className="skills__name">Node.js</span>
                </div>
                <div className="skills__bar skills__node"></div>
              </div>

              <div className="skills__data">
                <div className="skills__names">
                  <i className='bx bx-server skills__icon'></i>
                  <span className="skills__name">Express</span>
                </div>
                <div className="skills__bar skills__express"></div>
              </div>

              <div className="skills__data">
                <div className="skills__names">
                  <i className='bx bx-mobile-alt skills__icon'></i>
                  <span className="skills__name">Flutter</span>
                </div>
                <div className="skills__bar skills__flutter"></div>
              </div>

              <div className="skills__data">
                <div className="skills__names">
                  <i className='bx bxl-react skills__icon'></i>
                  <span className="skills__name">React Native</span>
                </div>
                <div className="skills__bar skills__react-native"></div>
              </div>
            </div>

            <div className="skills__category">
              <h3 className="skills__category-title">Tools</h3>
              
              <div className="skills__data">
                <div className="skills__names">
                  <i className='bx bxl-git skills__icon'></i>
                  <span className="skills__name">Git</span>
                </div>
                <div className="skills__bar skills__git"></div>
              </div>

              <div className="skills__data">
                <div className="skills__names">
                  <i className='bx bxl-docker skills__icon'></i>
                  <span className="skills__name">Docker</span>
                </div>
                <div className="skills__bar skills__docker"></div>
              </div>

              <div className="skills__data">
                <div className="skills__names">
                  <i className='bx bxl-kubernetes skills__icon'></i>
                  <span className="skills__name">Kubernetes</span>
                </div>
                <div className="skills__bar skills__kubernetes"></div>
              </div>

              <div className="skills__data">
                <div className="skills__names">
                  <i className='bx bxl-aws skills__icon'></i>
                  <span className="skills__name">AWS</span>
                </div>
                <div className="skills__bar skills__aws"></div>
              </div>

              <div className="skills__data">
                <div className="skills__names">
                  <i className='bx bxl-firebase skills__icon'></i>
                  <span className="skills__name">Firebase</span>
                </div>
                <div className="skills__bar skills__firebase"></div>
              </div>

              <div className="skills__data">
                <div className="skills__names">
                  <i className='bx bx-data skills__icon'></i>
                  <span className="skills__name">MongoDB</span>
                </div>
                <div className="skills__bar skills__mongodb"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="skills__soft">
          <h3 className="skills__subtitle">Soft Skills</h3>
          <div className="skills__soft-grid">
            <div className="skills__soft-item">
              <i className='bx bx-time-five skills__soft-icon'></i>
              <span className="skills__soft-name">Time Management</span>
            </div>
            <div className="skills__soft-item">
              <i className='bx bx-group skills__soft-icon'></i>
              <span className="skills__soft-name">Teamwork</span>
            </div>
            <div className="skills__soft-item">
              <i className='bx bx-conversation skills__soft-icon'></i>
              <span className="skills__soft-name">Communication</span>
            </div>
            <div className="skills__soft-item">
              <i className='bx bx-bulb skills__soft-icon'></i>
              <span className="skills__soft-name">Problem Solving</span>
            </div>
            <div className="skills__soft-item">
              <i className='bx bx-refresh skills__soft-icon'></i>
              <span className="skills__soft-name">Adaptability</span>
            </div>
            <div className="skills__soft-item">
              <i className='bx bx-check-shield skills__soft-icon'></i>
              <span className="skills__soft-name">Accountability</span>
            </div>
          </div>
        </div>
      </div>

      <p className="skills__text skills__additional-info">
        This is not an exhaustive list, and I'm always excited to learn and explore new technologies.
      </p>
    </section>
  );
}

export default Skills;