import React from 'react';

const TechnologiesPage = () => {
  return (
    <section className="technologies">
      <h2>Technologies</h2>
      <p>
        As a full-stack web developer, I've gained experience with a diverse set of languages and frameworks.
        Below are some of the key technologies I've worked with:
      </p>

      <div className="technology-category">
        <h3>Frontend Technologies</h3>
        <ul>
          <li>
          <img src='' alt="" />
          HTML5
          </li>
          <li>
          <img src='' alt="" />
          CSS3
          </li>
          <li>
          <img src='' alt="" />
          JavaScript (ES6+)
          </li>
          <li>
          <img src='' alt="" />
          React.js
          </li>
        </ul>
      </div>

      <div className="technology-category">
        <h3>Backend Technologies</h3>
        <ul>
          <li>
          <img src='' alt="" />
          Node.js
          </li>
          <li>
          <img src='' alt="" />
          Express.js
          </li>
        </ul>
      </div>

      <div className="technology-category">
        <h3>Database</h3>
        <ul>
          <li>
          <img src='' alt="" />
          MongoDB
          </li>
        </ul>
      </div>

      <div className="technology-category">
        <h3>Other Technologies</h3>
        <ul>
          <li>Git and GitHub</li>
          <li>RESTful APIs</li>
          <li>Yarn</li>
        </ul>
      </div>

      <p>
        This is not an exhaustive list, and I'm always excited to learn and explore new technologies to enhance
        my skills as a developer.
      </p>
    </section>
  );
};

export default TechnologiesPage;

