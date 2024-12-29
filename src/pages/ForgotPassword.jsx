import React, { useState } from 'react';
import axios from 'axios';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://sports-app-backend-a5bh.onrender.com/api/auth/forgot-password', { email });
      alert(response.data.message);
    } catch (error) {
      alert('Request failed');
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[url('src/assets/sportsbg.webp')] bg-cover bg-center font-poppins">
      <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto mt-10 bg-white/70 p-8 rounded-lg shadow-2xl border-t-4 border-yellow-400">
        <h1 className="text-3xl font-extrabold text-blue-900 mb-6 text-center">Forgot Password</h1>
        <p className="text-lg text-gray-700 mb-6 text-center">Enter your email to reset your password.</p>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-4 focus:ring-blue-400"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-yellow-500 to-orange-600 text-white py-3 rounded-lg font-bold text-lg hover:shadow-lg transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
