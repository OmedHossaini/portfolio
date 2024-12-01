import React from 'react';

function Projects() {
  return (
    <section className="project section" id="project">
      <h2 className="section-title">Projects</h2>

      <div className="project__container bd-grid">
        <div className="project__item">

            <img src="./clegj6g4f51c72urtetg - Trim.gif" />

          <div className="project__text">
            <h3>R.O.B.O Watches - Your Time, Your Style</h3>
            <a href="https://github.com/OmedHossaini/E-Commerce-ROBO" className="github-button">
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
            <img src="piggame.gif" alt="" />
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
        <div className="project__item">
    <img src="final project video - Made with Clipchamp.gif" alt="Workout Tracker App" />
  
  <div className="project__text">
    <h3>Workout Tracker App</h3>
    <a href="https://github.com/OmedHossaini/Final_Project" className="github-button">
      <i className='bx bxl-github'></i> GitHub
    </a>
    <br></br>
    <br></br>
    <p>
      Welcome to the FitSync website! This application allows users to track their workouts, manage their profiles, and set fitness goals.
    </p>
    <p>
      <strong>Technologies used: React.js, API Integration</strong>
    </p>
  </div>
</div>
<div className="project__item">
          <a href="https://www.toristecumtraductionandrevision.site/" className="project__img">
            <img src="Tori.gif" alt="Translation Website" />
          </a>
          <div className="project__text">
            <h3>Tori Stecum Traduction et Révison</h3>
            <a href="https://github.com/OmedHossaini/Tori-Stecum-Traduction-et-R-vison" className="github-button">
              <i className='bx bxl-github'></i> GitHub
            </a>
            <br></br>
            <br></br>
            <p>
A Freelance Translation and Revison website that offers services for documents to be translated from French to English or vice versa.
            </p>
            <br></br>
            <p>
              <strong>Technologies used: HTML, CSS, JavaScript, Database Integration</strong>
            </p>
          </div>
      </div>
      <div className="project__item">
          <a href="https://hdacademynotes.onrender.com/" className="project__img">
            <img src="HD.gif" alt="Notes" />
          </a>
          <div className="project__text">
            <h3>HD Academy Notes</h3>
            <a href="https://github.com/OmedHossaini/HDAcademy" className="github-button">
              <i className='bx bxl-github'></i> GitHub Frontend
            </a>
            <br></br>
            <a href="https://github.com/OmedHossaini/HDAcademy-api" className="github-button">
              <i className='bx bxl-github'></i> GitHub Backend
            </a>
            <br></br>
            <br></br>
            <p>

            At HD Academy in Brossard, Canada, I built a secure MERN app with JWT-based authentication. The backend includes user registration/login with Bcrypt password hashing, and the React frontend ensures seamless note management with React Router.
            </p>
            <br></br>
            <p>
              <strong>Technologies used: React.js, HTML, CSS, JavaScript, npm, GitHub, Node.js, Redux, Database Integration</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
