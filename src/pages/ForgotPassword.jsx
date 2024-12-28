import React, { useState } from 'react';
import axios from 'axios';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/auth/forgot-password', { email });
      alert(response.data.message);
    } catch (error) {
      alert('Request failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-3/4 max-w-md mx-auto mt-10">
      <input type="email" placeholder="Email" className="border p-2 w-full mb-4" onChange={(e) => setEmail(e.target.value)} />
      <button type="submit" className="bg-yellow-500 text-white px-4 py-2 rounded w-full">Submit</button>
    </form>
  );
};

export default ForgotPassword;