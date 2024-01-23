import React, { useState } from 'react';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://api.render.com/deploy/srv-cmnjn3la73kc73auqd7g?key=1FGLe5f5CIM', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      window.alert(data.message);
      console.log('Email sent successfully:', data);
    } catch (error) {
      console.error('Error sending email:', error.message || error);
      window.alert('Error sending email. Please try again.');
    }
  };

  const CV = () => {
    const cvUrl = 'https://docs.google.com/document/d/1SpH3QyIbqqOBmkhOMKttgkMdyI0aqcTi/edit?usp=sharing&ouid=112978790762897057478&rtpof=true&sd=true';

    return (
      <section id="CV" className="cv-section">
        <div className="cv-container">
          <p className="cv-description">
            Explore my qualifications and experience by downloading my CV.
          </p>
          <a
            href={cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cv-download-button"
          >
            Download CV
          </a>
        </div>
      </section>
    );
  };

  return (
    <div id="contact" className="contact-me-container">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" value={formData.message} onChange={handleChange} required />

        <button type="submit">Submit</button>
      </form>
      <CV />
    </div>
  );
};

export default ContactMe;
