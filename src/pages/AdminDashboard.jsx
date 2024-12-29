import React, { useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [post, setPost] = useState({
    sports: '',
    Feature: '',
    Ruls: '',
    physical_helth: '',
    mental_helth: '',
    scholarship_12th: '',
    scholarship_collage: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('authToken'); // Include token if needed
      const response = await axios.post('https://sports-app-backend-a5bh.onrender.com/api/post/create', post, {
        headers: { Authorization: `Bearer ${token}` }, // Add headers if required
      });
      alert(response.data.message);
    } catch (error) {
      console.error('Error:', error.response?.data || error.message);
      alert(error.response?.data?.message || 'Failed to create post');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-11/12 max-w-2xl mx-auto mt-10 bg-white/70 p-8 rounded-lg shadow-2xl font-poppins">
      <h1 className="text-3xl font-extrabold text-blue-900 uppercase tracking-wide mb-6 text-center">Create New Post</h1>
      <input
        type="text"
        placeholder="Sport Name"
        className="border p-3 w-full mb-4 text-lg rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400"
        onChange={(e) => setPost({ ...post, sports: e.target.value })}
      />
      <input
        type="text"
        placeholder="Feature"
        className="border p-3 w-full mb-4 text-lg rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400"
        onChange={(e) => setPost({ ...post, Feature: e.target.value })}
      />
      <textarea
        placeholder="Rules"
        className="border p-3 w-full mb-4 text-lg rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400"
        onChange={(e) => setPost({ ...post, Ruls: e.target.value })}
      ></textarea>
      <textarea
        placeholder="Physical Health"
        className="border p-3 w-full mb-4 text-lg rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400"
        onChange={(e) => setPost({ ...post, physical_helth: e.target.value })}
      ></textarea>
      <textarea
        placeholder="Mental Health"
        className="border p-3 w-full mb-4 text-lg rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400"
        onChange={(e) => setPost({ ...post, mental_helth: e.target.value })}
      ></textarea>
      <input
        type="text"
        placeholder="Scholarship for 12th"
        className="border p-3 w-full mb-4 text-lg rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400"
        onChange={(e) => setPost({ ...post, scholarship_12th: e.target.value })}
      />
      <input
        type="text"
        placeholder="Scholarship for College"
        className="border p-3 w-full mb-4 text-lg rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400"
        onChange={(e) => setPost({ ...post, scholarship_collage: e.target.value })}
      />
      <button
        type="submit"
        className="bg-gradient-to-r from-green-500 to-blue-700 text-white py-3 rounded-lg w-full text-lg font-bold hover:shadow-lg transition duration-300"
      >
        Create Post
      </button>
    </form>
  );
};

export default AdminDashboard;
