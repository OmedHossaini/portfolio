import React from 'react';

function Projects() {
  return (
    <section className="project section" id="project">
      <h2 className="section-title">Projects</h2>

      <div className="project__container bd-grid">
        <div className="project__item">
          <a href="" className="project__img">
            <img src="./clegj6g4f51c72urtetg - Trim.gif" alt="" />
          </a>
          <div className="project__text">
            <h3>ROBO Watches - Your Time, Your Style</h3>
            <a href="https://github.com/RenaudCormierBootcamp/project-GROUP-e-commerce" className="github-button">
              <i className='bx bxl-github'></i> GitHub
            </a>
            <br></br>
            <br></br>
            <p>
              Explore, buy, and effortlessly manage your cart at ROBO Watches. Enjoy a seamless shopping experience with persistent storage. Our RESTful Node server ensures efficient, real-time updates for a smooth purchasing process.
            </p>
            <p>
              <strong>Technologies used: Node.js, React, RESTful API, Database Integration</strong>
            </p>
          </div>
        </div>

        <div className="project__item">
          <a href="https://cookie-clicker-six.vercel.app/" className="project__img">
            <img src="./clicker.gif" alt="" />
          </a>
          <div className="project__text">
            <h3>Cookie Clicker Clone</h3>
            <a href="https://github.com/OmedHossaini/CookieClicker" className="github-button">
              <i className='bx bxl-github'></i> GitHub
            </a>
            <br></br>
            <br></br>
            <p>
              A fun and addictive Cookie Clicker game clone where users can click on a cookie to earn points. Upgrade your clicking power and see how many cookies you can collect!
            </p>
            <p>
              <strong>Technologies used: HTML, CSS, JavaScript (React)</strong>
            </p>
          </div>
        </div>

        <div className="project__item">
          <a href="https://pig-game-ashy.vercel.app/" className="project__img">
            <img src="./Untitled video - Made with Clipchamp.gif" alt="" />
          </a>
          <div className="project__text">
            <h3>The Pig Game</h3>
            <a href="https://github.com/OmedHossaini/PigGame" className="github-button">
              <i className='bx bxl-github'></i> GitHub
            </a>
            <br></br>
            <br></br>
            <p>
              Enjoy the classic Pig Game, a turn-based dice game where two players compete to reach 20 points. Roll the dice to accumulate points, but be careful, rolling a 1 resets your score! Make strategic decisions on when to "Hold" to secure your points and win the game.
            </p>
            <p>
              <strong>Technologies used: HTML, CSS, JavaScript</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
