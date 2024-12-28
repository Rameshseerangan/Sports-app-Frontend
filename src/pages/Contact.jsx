import React from 'react';

const Contact = () => {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">Contact Us - Shine Sports</h1>
      <p className="mb-6">
        Looking for information about sports or need assistance? We’re here to help!  
      </p>
      <div className="mb-4">
        <strong>📍 Address:</strong> 123 Shine Sports Avenue, Sportstown, ST 12345
      </div>
      <div className="mb-4">
        <strong>📞 Phone:</strong> +1-234-567-8901
      </div>
      <div className="mb-4">
        <strong>✉️ Email:</strong> info@shinesports.com
      </div>
      <div className="mb-4">
        <strong>🕒 Business Hours:</strong>
        <ul>
          <li>Monday to Friday: 9:00 AM – 6:00 PM</li>
          <li>Saturday: 10:00 AM – 4:00 PM</li>
        </ul>
      </div>
      <p>If you need any sports-related information or have questions, please don't hesitate to contact us using the details above or fill out the form below.</p>
      <form className="mt-6">
        <div className="mb-4">
          <label htmlFor="name" className="block font-medium">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-medium">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block font-medium">Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Type your message here"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
