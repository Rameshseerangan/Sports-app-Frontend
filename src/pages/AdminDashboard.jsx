import React, { useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [post, setPost] = useState({
    sportName: '',
    feature: '',
    rules: '',
    physicalHealth: '',
    mentalHealth: '',
    scholarship_12th: '', // New field
    scholarship_college: '', // New field
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('authToken'); // Include token if needed
      const response = await axios.post('http://localhost:4000/api/post/create', post, {
        headers: { Authorization: `Bearer ${token}` }, // Add headers if required
      });
      alert(response.data.message);
    } catch (error) {
      console.error('Error:', error.response?.data || error.message);
      alert(error.response?.data?.message || 'Failed to create post');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-3/4 max-w-md mx-auto mt-10">
      <input
        type="text"
        placeholder="Sport Name"
        className="border p-2 w-full mb-4"
        onChange={(e) => setPost({ ...post, sportName: e.target.value })}
      />
      <input
        type="text"
        placeholder="Feature"
        className="border p-2 w-full mb-4"
        onChange={(e) => setPost({ ...post, feature: e.target.value })}
      />
      <textarea
        placeholder="Rules"
        className="border p-2 w-full mb-4"
        onChange={(e) => setPost({ ...post, rules: e.target.value })}
      ></textarea>
      <textarea
        placeholder="Physical Health"
        className="border p-2 w-full mb-4"
        onChange={(e) => setPost({ ...post, physicalHealth: e.target.value })}
      ></textarea>
      <textarea
        placeholder="Mental Health"
        className="border p-2 w-full mb-4"
        onChange={(e) => setPost({ ...post, mentalHealth: e.target.value })}
      ></textarea>
      {/* New input fields */}
      <input
        type="text"
        placeholder="Scholarship for 12th"
        className="border p-2 w-full mb-4"
        onChange={(e) => setPost({ ...post, scholarship_12th: e.target.value })}
      />
      <input
        type="text"
        placeholder="Scholarship for College"
        className="border p-2 w-full mb-4"
        onChange={(e) => setPost({ ...post, scholarship_college: e.target.value })}
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded w-full"
      >
        Create Post
      </button>
    </form>
  );
};

export default AdminDashboard;
