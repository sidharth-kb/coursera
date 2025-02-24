import React, { useState } from 'react';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: '',
    rating: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    const newFormData = {...formData};
    newFormData[name] = value;

    setFormData(newFormData);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const confirmation = `
      Name: ${formData.name}
      Email: ${formData.email}
      Feedback: ${formData.feedback}
      Rating: ${formData.rating}
    `;

    const isConfirmed = window.confirm(`Please confirm your details: \n ${confirmation}`);

    if (isConfirmed) {
      console.log('Submitting feedback:', formData);
      setFormData({
        name: '',
        email: '',
        feedback: '',
        rating: 0
      })
    }
  }

  return (
    <>
      <nav>
        Tell us what you think
      </nav>
      <form onSubmit={(e) => handleSubmit(e)}>
        <h2>We'd love to hear from you</h2>
        <p>Please share your feedback</p>
        <input
          type="text"
          name="name"
          placeholder={ formData.name }
          onChange={ (e) => handleChange(e) }
        />
        <input
          type="email"
          name="email"
          placeholder={ formData.email }
          onChange={ (e) => handleChange(e) }
        />
        <textarea
          name="feedback"
          placeholder={ formData.feedback }
          onChange={ (e) => handleChange(e) }
        ></textarea>
        <label for="rating">Rating</label>
        <label>
          <input type="radio" name="rating" value="0" onChange={ (e) => handleChange(e) } />
          0
        </label>
        <label>
          <input type="radio" name="rating" value="1" onChange={ (e) => handleChange(e) } />
          1
        </label>
        <label>
          <input type="radio" name="rating" value="2" onChange={ (e) => handleChange(e) } />
          2
        </label>
        <label>
          <input type="radio" name="rating" value="3" onChange={ (e) => handleChange(e) } />
          3
        </label>
        <label>
          <input type="radio" name="rating" value="4" onChange={ (e) => handleChange(e) } />
          4
        </label>
        <label>
          <input type="radio" name="rating" value="5" onChange={ (e) => handleChange(e) } />
          5
        </label>
        <button type="submit">Submit Feedback</button>
      </form>
    </>
  )
}

export default FeedbackForm;
