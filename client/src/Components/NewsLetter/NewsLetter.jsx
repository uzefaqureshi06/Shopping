import React, { useState } from 'react';
import './NewsLetter.css';

const NewsLetter = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      // You can replace this logic with API call to store the email
      console.log('Subscribed with:', email);
      setMessage('Thank you for subscribing!');
      setEmail(''); // Clear the input field after submission
    } else {
      setMessage('Please enter a valid email address.');
    }
  };

  return (
    <div className="newsLetter">
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <form onSubmit={handleSubscribe}>
        <div>
          <input
            type="email"
            placeholder="Your Email id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Subscribe</button>
        </div>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default NewsLetter;
