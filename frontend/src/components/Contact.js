import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., sending email)
    alert('Message Sent!');
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" onChange={handleChange} value={formData.name} />
        <input type="email" name="email" placeholder="Your Email" onChange={handleChange} value={formData.email} />
        <textarea name="message" placeholder="Your Message" onChange={handleChange} value={formData.message}></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
