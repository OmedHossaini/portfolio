import React from 'react';


function Contact() {
  return (
    <section className="contact section" id="contact">
      <h2 className="section-title">Contact Me</h2>

      <div className="contact__container bd-grid">
        <div className="contact__content">
          <h3 className="contact__subtitle">Let's Connect</h3>
          <p className="contact__description">
            I'm currently available for freelance work and open to new opportunities. 
            If you have a project that needs creative development or if you'd like to discuss
            a potential collaboration, feel free to reach out using any of the methods below.
          </p>
          
          <div className="contact__info">
            <div className="contact__card">
              <i className='bx bx-phone-call contact__card-icon'></i>
              <h3 className="contact__card-title">Phone</h3>
              <span className="contact__card-data">
                <a href="tel:4389247828">438-924-7828</a>
              </span>
              <a href="tel:4389247828" className="contact__button-small">
                Call me <i className='bx bx-right-arrow-alt'></i>
              </a>
            </div>

            <div className="contact__card">
              <i className='bx bx-mail-send contact__card-icon'></i>
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">
                <a href="mailto:Omed_Hossaini@Outlook.com">Omed_Hossaini@Outlook.com</a>
              </span>
              <a href="mailto:Omed_Hossaini@Outlook.com" className="contact__button-small">
                Email me <i className='bx bx-right-arrow-alt'></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__subtitle">Find Me</h3>
          <div className="contact__location">
            <i className='bx bx-map contact__location-icon'></i>
            <div>
              <h3 className="contact__location-title">Location</h3>
              <span className="contact__location-data">Montreal, Quebec, Canada</span>
            </div>
          </div>
          
          <div className="contact__resume">
            <h3 className="contact__resume-title">Resume</h3>
            <p className="contact__resume-description">
              Want to learn more about my experience and skills? Download my resume.
            </p>
            <a href="https://drive.google.com/file/d/1byf0LlTGZ9riox4om9ZVnoD2aIQ160h6/view?usp=sharing" 
               className="contact__resume-button"
               target="_blank" 
               rel="noopener noreferrer">
              <i className='bx bx-download'></i> Download Resume
            </a>
          </div>
          
          <div className="contact__social">
            <h3 className="contact__social-title">Follow Me</h3>
            <div className="contact__social-links">
              <a href="https://github.com/OmedHossaini" 
                 className="contact__social-icon" 
                 target="_blank" 
                 rel="noopener noreferrer">
                <i className='bx bxl-github'></i>
              </a>
              <a href="https://www.linkedin.com/in/omed-hossaini-a25b942a0/" 
                 className="contact__social-icon" 
                 target="_blank" 
                 rel="noopener noreferrer">
                <i className='bx bxl-linkedin'></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;