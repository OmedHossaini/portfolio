import React from 'react';

function Contact() {
  return (
    <section className="contact section" id="contact">
      <h2 className="section-title">Contact</h2>
      <div className="contact__container bd-grid">
        <form action="/submit" className="contact__form" method="POST">
          <input type="text" placeholder="Name" className="contact__input" name="name" />
          <input type="email" placeholder="Email" className="contact__input" name="email" />
          <textarea name="message" placeholder="Shoot Me A Message!" cols="0" rows="10" className="contact__input"></textarea>
          <input type="submit" value="Send" className="contact__button button" />
        </form>
      </div>
    </section>
  );
}

export default Contact;

