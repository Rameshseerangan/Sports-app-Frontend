import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/auth/login', { email, password });
      const { role, token, message } = response.data;

      // Store token for authenticated requests
      localStorage.setItem('authToken', token);

      // Navigate based on role
      if (role === 'admin') {
        navigate('/admin'); // Redirect to admin dashboard
      } else {
        navigate('/'); // Redirect to home page for regular users
      }

      alert(message || 'Login successful!');
    } catch (error) {
      console.error('Login error:', error.response?.data || error.message);
      alert(error.response?.data?.message || 'Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-500 to-blue-700">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-11/12 max-w-md"
      >
        <h1 className="text-2xl font-extrabold text-blue-700 mb-6 text-center">
          Login to Your Account
        </h1>
        <input
          type="email"
          placeholder="Email"
          className="border border-gray-300 p-3 w-full mb-4 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          placeholder="Password"
          className="border border-gray-300 p-3 w-full mb-4 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button
          type="submit"
          className="w-full bg-yellow-400 text-blue-900 py-3 rounded-lg font-bold text-lg hover:bg-yellow-500 transition duration-300"
        >
          Login
        </button>
        <div className="text-center mt-4">
          <Link
            to="/forgot-password"
            className="text-blue-700 hover:text-blue-500 transition duration-300"
          >
            Forgot Password?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
