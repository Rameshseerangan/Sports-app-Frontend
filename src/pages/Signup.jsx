import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', password: '', role: 'Student' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/auth/register', formData);
      alert(response.data.message);
      navigate("/login");
    } catch (error) {
      alert('Signup failed');
    }
  };

  return (
    <div className="h-screen w-full bg-[url(/src/assets/sportsbg.webp)] bg-cover bg-center flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-2xl w-11/12 max-w-lg flex flex-col items-center space-y-6"
      >
        <h1 className="text-3xl font-extrabold text-blue-700">Create Your Account</h1>
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full border border-gray-300 p-4 rounded-lg text-lg focus:outline-none focus:ring-4 focus:ring-blue-400"
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full border border-gray-300 p-4 rounded-lg text-lg focus:outline-none focus:ring-4 focus:ring-blue-400"
        />
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          className="w-full border border-gray-300 p-4 rounded-lg text-lg focus:outline-none focus:ring-4 focus:ring-blue-400"
        />
        <select
          value={formData.role}
          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
          className="w-full border border-gray-300 p-4 rounded-lg text-lg focus:outline-none focus:ring-4 focus:ring-blue-400"
        >
          <option value="user">Student</option>
          <option value="admin">Admin</option>
        </select>
        <button
          type="submit"
          className="w-full bg-yellow-400 text-blue-900 py-3 rounded-lg font-bold text-lg hover:bg-yellow-500 transition duration-300"
        >
          Signup
        </button>
        <p className="text-blue-700">
          Already have an account?{" "}
          <Link to="/login" className="text-yellow-400 font-bold hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
