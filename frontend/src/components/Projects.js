import React from 'react';

const ProjectsPage = () => {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <p>Explore some of the projects I've worked on:</p>

      <div className="project">
        <h3>Cookie Clicker Game Clone</h3>
        <p>
          A fun and addictive Cookie Clicker game clone where users can click on a cookie to earn points.
          Upgrade your clicking power and see how many cookies you can collect!
        </p>
        <p>
          <strong>Technologies used: HTML, CSS, JavaScript (React)</strong>
        </p>
      </div>

      <div className="project">
        <h3>The Pig Game</h3>
        <p>Enjoy the classic Pig Game, a turn-based dice game where two players compete to reach 20 points.
          Roll the dice to accumulate points, but be careful, rolling a 1 resets your score!
          Make strategic decisions on when to "Hold" to secure your points and win the game.
        </p>
        <p>
          <strong>Technologies used: HTML, CSS, JavaScript</strong>
        </p>
      </div>


      <p>
        These projects showcase a variety of skills, including frontend and backend development,
        database integration, and more. Feel free to explore the code on GitHub.
      </p>
    </section>
  );
};

export default ProjectsPage;

