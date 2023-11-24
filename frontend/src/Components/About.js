import React from 'react';

function About() {
  return (
    <section className="about section" id="about">
      <h2 className="section-title">About Me</h2>

      <div className="about__container bd-grid">
        <div className="about__img">
          <img src="./profile pic 1.png" alt="profilepic" />
        </div>

        <div>
          <h2 className="about__subtitle">I'm Omed</h2>
          <p className="about__text">Welcome to my world! I am a passionate full-stack web developer, dedicated to crafting beautiful and functional web applications. My skill set includes HTML, CSS, JavaScript, Node.js, MongoDB, and React.</p>

          <p className="about__text">Outside of coding, I enjoy a variety of hobbies that keep me balanced and inspired. When I'm not immersed in the world of web development, you can find me:</p>

          <ul className="about__list">
            <li><i className='bx bx-right-arrow-circle'></i> Playing video games <i className='bx bxs-game bx-fade-up'></i></li>
            <li><i className='bx bx-right-arrow-circle'></i> Shooting hoops on the basketball court <i className='bx bxs-basketball bx-tada'></i></li>
            <li><i className='bx bx-right-arrow-circle'></i> Watching YouTube videos <i className='bx bxs-videos bx-flashing'></i></li>
            <li><i className='bx bx-right-arrow-circle'></i> Expressing my creativity through drawing <i className='bx bx-pencil bx-burst'></i></li>
          </ul>

          <p className="about__text">
            I believe that a diverse set of interests fuels creativity and helps me approach coding challenges with a fresh perspective. Let's build something amazing together!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;

