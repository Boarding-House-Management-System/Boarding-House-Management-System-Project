import React, { useState } from 'react';

const LateForm = () => {
  // State variables to store form data
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  // Handle form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // You can perform form validation here before submitting
    console.log('Form submitted:', formData);
    // Reset form fields after submission
    setFormData({ name: '', email: '' });
  };

  return (
    <div>
      <h2>Submit Your Late Arriaval Request</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LateForm;
