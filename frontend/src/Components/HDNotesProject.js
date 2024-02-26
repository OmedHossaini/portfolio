import React from 'react';
import { Link } from 'react-router-dom';

const HDNotesProject = () => {
  return (
    <div className="project__item">
      <Link to="/hd-academy-notes-details">
        <div className="project__img">
          <img src="HD.gif" alt="Notes" />
        </div>
        <div className="project__text">
          <h3>HD Academy Notes</h3>
          <a href="https://github.com/OmedHossaini/HDAcademy" className="github-button">
            <i className='bx bxl-github'></i> GitHub Frontend
          </a>
          <br />
          <a href="https://github.com/OmedHossaini/HDAcademy-api" className="github-button">
            <i className='bx bxl-github'></i> GitHub Backend
          </a>
          <br />
          <br />
          <p>
            At HD Academy in Brossard, Canada, I built a secure MERN app with JWT-based authentication. The backend includes user registration/login with Bcrypt password hashing, and the React frontend ensures seamless note management with React Router.
          </p>
          <br />
          <p>
            <strong>Technologies used: React.js, HTML, CSS, JavaScript, npm, GitHub, Node.js, Redux, Database Integration</strong>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default HDNotesProject;
