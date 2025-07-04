import React from 'react';

const SkillItem = ({ name, level }) => {
  return (
    <div className="skills__data">
      <div className="skills__names">
        {name === 'JavaScript' && <i className='bx bxl-javascript skills__icon'></i>}
        {name === 'TypeScript' && <i className='bx bxl-typescript skills__icon'></i>}
        {name === 'HTML' && <i className='bx bxl-html5 skills__icon'></i>}
        {name === 'CSS' && <i className='bx bxl-css3 skills__icon'></i>}
        {name === 'Python' && <i className='bx bxl-python skills__icon'></i>}
        {name === 'React' && <i className='bx bxl-react skills__icon'></i>}
        {name === 'Node.js' && <i className='bx bxl-nodejs skills__icon'></i>}
        {name === 'Git' && <i className='bx bxl-git skills__icon'></i>}
        {name === 'AWS' && <i className='bx bxl-aws skills__icon'></i>}
        {name === 'MongoDB' && <i className='bx bx-data skills__icon'></i>}
        {name === 'PostgreSQL' && <i className='bx bx-data skills__icon'></i>}
        {name === 'Docker' && <i className='bx bxl-docker skills__icon'></i>}
        {name === 'Firebase' && <i className='bx bxl-firebase skills__icon'></i>}
        {!['JavaScript', 'TypeScript', 'HTML', 'CSS', 'Python', 'React', 'Node.js', 'Git', 'AWS', 'MongoDB', 'PostgreSQL', 'Docker', 'Firebase'].includes(name) && (
          <i className='bx bx-code-alt skills__icon'></i>
        )}
        <span className="skills__name">{name}</span>
      </div>
      <div className="skills__bar" style={{ width: `${level}%` }}></div>
      <div>
        <span className="skills__percentage">{level}%</span>
      </div>
    </div>
  );
};

export default SkillItem;