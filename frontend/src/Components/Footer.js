import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__title">Connect with Me</p>
      <p className="footer__text">Thank you for visiting my portfolio! Let's stay in touch and build something amazing together. Feel free to reach out on social media or drop me an email.</p>
      <br />
      <div className="footer__social">
        <a href="https://www.facebook.com/omed.hossaini/" className="footer__icon"><i className='bx bxl-facebook'></i></a>
        <a href="https://www.instagram.com/omedhossaini/" className="footer__icon"><i className='bx bxl-instagram'></i></a>
        <a href="https://www.linkedin.com/in/omed-hossaini-a25b942a0/" className="footer__icon"><i className='bx bxl-linkedin'></i></a>
        <a href="https://github.com/OmedHossaini" className="footer__icon"><i className='bx bxl-github'></i></a>
        <a href="mailto:omedhossainiomedhossaini123@hotmail.com" className="footer__icon"><i className='bx bx-mail-send'></i></a>
      </div>
    </footer>
  );
}

export default Footer;

