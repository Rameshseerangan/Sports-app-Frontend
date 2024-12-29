import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[url('src/assets/sportsbg.webp')] bg-cover bg-center font-poppins">
      <div className="bg-white/70 p-8 md:p-12 lg:p-16 rounded-lg shadow-2xl w-full max-w-6xl border-t-4 border-yellow-400">
        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 uppercase mb-6 text-center">
          Contact Us - Shine Sports
        </h1>
        <p className="mb-6 text-lg text-gray-700 text-center">
          Looking for information about sports or need assistance? We’re here to help!
        </p>
        <div className="text-lg text-gray-800 mb-6">
          <div className="mb-4"><strong>📍 Address:</strong> 123 Shine Sports Avenue, Sportstown, ST 12345</div>
          <div className="mb-4"><strong>📞 Phone:</strong> +1-234-567-8901</div>
          <div className="mb-4"><strong>✉️ Email:</strong> info@shinesports.com</div>
          <div className="mb-4">
            <strong>🕒 Business Hours:</strong>
            <ul className="ml-6 list-disc">
              <li>Monday to Friday: 9:00 AM – 6:00 PM</li>
              <li>Saturday: 10:00 AM – 4:00 PM</li>
            </ul>
          </div>
        </div>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block font-semibold mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-semibold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="message" className="block font-semibold mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400"
              placeholder="Type your message here"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-500 to-blue-700 text-white py-3 rounded-lg font-bold text-lg hover:shadow-lg transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
