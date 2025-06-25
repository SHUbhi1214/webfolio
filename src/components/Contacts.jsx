import React, { useState } from 'react';
import Reveal from './Reveal';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="px-6 max-w-[650px] mx-auto mt-10" id="contact"> {/* Added mt-20 here */}

      <Reveal>
        <form
          action="https://formsubmit.co/shubhiv612@gmail.com"
          method="POST"
          className="w-full p-8 border border-blue-400/50 bg-blue-950/10 backdrop-blur-lg rounded-2xl shadow-lg"
          id="form"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-4">Let’s Connect</h2>
          <br></br>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mb-3 w-full rounded-md border border-blue-400 bg-white text-gray-800 placeholder-gray-500 py-3 px-4 text-sm"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mb-3 w-full rounded-md border border-blue-400 bg-white text-gray-800 placeholder-gray-500 py-3 px-4 text-sm"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            required
            className="mb-4 w-full rounded-md border border-blue-400 bg-white text-gray-800 placeholder-gray-500 py-3 px-4 text-sm"
          />
          <button
            type="submit"
            className="w-full py-3 rounded-md text-white font-semibold text-base bg-blue-600 hover:bg-blue-700 transition"
          >
            Send Message
          </button>

          {responseMessage && <p className="mt-4 text-sm text-gray-300">{responseMessage}</p>}
        </form>
      </Reveal>
    </div>
  );
};

export default Contacts;
