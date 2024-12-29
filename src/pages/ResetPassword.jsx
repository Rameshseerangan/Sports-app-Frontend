import React, { useState } from 'react';
import axios from 'axios';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://sports-app-backend-a5bh.onrender.com/api/reset-password', { password, confirmPassword });
      alert(response.data.message);
    } catch (error) {
      alert('Reset failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-3/4 max-w-md mx-auto mt-10 font-poppins">
      <input
        type="password"
        placeholder="New Password"
        className="border p-2 w-full mb-4"
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        className="border p-2 w-full mb-4"
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button
        type="submit"
        className="bg-purple-500 text-white px-4 py-2 rounded w-full"
      >
        Reset Password
      </button>
    </form>
  );
};

export default ResetPassword;
