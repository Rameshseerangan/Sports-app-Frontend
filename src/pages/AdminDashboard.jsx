import React, { useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [post, setPost] = useState({
    sports: '',
    roadmapImg: '', // Add roadmap image field
    Feature: [
      { subheading: 'Professional Player', content: '' },
      { subheading: 'Coach/Trainer', content: '' },
      { subheading: 'Sports Analyst/Commentator', content: '' },
      { subheading: 'Umpire/Match Official', content: '' },
      { subheading: 'Fitness Trainer', content: '' },
      { subheading: 'Administrator/Manager', content: '' },
      { subheading: 'Success Stories', content: '' },
      { subheading: 'Earnings and Growth', content: '' },
    ],
    Ruls: [
      { subheading: 'Warm-Up', content: '' },
      { subheading: 'Technical Skills', content: '' },
      { subheading: 'Tactical Training', content: '' },
      { subheading: 'Physical Conditioning', content: '' },
      { subheading: 'Nutrition Plan', content: '' },
    ],
    physical_helth: [
      { subheading: 'Fitness Requirements', content: '' },
      { subheading: 'Recommended Exercises', content: '' },
    ],
    mental_helth: [
      { subheading: 'Health Standards', content: '' },
      { subheading: 'Preventive Measures', content: '' },
      { subheading: 'Common Injuries', content: '' },
    ],
    scholarship_12th: [
      { subheading: 'Achievements', content: '' },
      { subheading: 'Academic Standards', content: '' },
      { subheading: 'Documentation', content: '' },
    ],
    scholarship_collage: [
      { subheading: 'Sports Achievements', content: '' },
      { subheading: 'Academic Criteria', content: '' },
      { subheading: 'Selection Process', content: '' },
      { subheading: 'Bonus Points', content: '' },
    ],
  });

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await axios.post(
        'https://sports-app-backend-a5bh.onrender.com/api/post/create', // Replace with your backend's image upload endpoint
        formData,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
        }
      );
      setPost({ ...post, roadmapImg: response.data.imageUrl }); // Save the uploaded image URL
      alert('Image uploaded successfully!');
    } catch (error) {
      console.error('Error uploading image:', error.response?.data || error.message);
      alert('Failed to upload image');
    }
  };

  const handleChange = (section, index, field, value) => {
    setPost((prev) => ({
      ...prev,
      [section]: prev[section].map((item, i) =>
        i === index ? { ...item, [field]: value } : item
      ),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('authToken');
      const response = await axios.post('https://sports-app-backend-a5bh.onrender.com/api/post/create', post, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert(response.data.message);
    } catch (error) {
      console.error('Error:', error.response?.data || error.message);
      alert(error.response?.data?.message || 'Failed to create post');
    }
  };

  const renderSection = (sectionName, sectionData) => (
    <div className="mb-6">
      <h2 className="text-xl font-bold text-blue-900 mt-6 mb-2">{sectionName}</h2>
      {sectionData.map((item, index) => (
        <div key={index} className="mb-4">
          <input
            type="text"
            placeholder={`Subheading - ${item.subheading}`}
            className="border p-3 w-full text-lg rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400 mb-2"
            value={item.subheading}
            onChange={(e) => handleChange(sectionName, index, 'subheading', e.target.value)}
          />
          <textarea
            placeholder="Content"
            className="border p-3 w-full text-lg rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400"
            value={item.content}
            onChange={(e) => handleChange(sectionName, index, 'content', e.target.value)}
          />
        </div>
      ))}
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="w-11/12 max-w-4xl mx-auto mt-10 bg-white/70 p-8 rounded-lg shadow-2xl font-poppins">
      <h1 className="text-3xl font-extrabold text-blue-900 uppercase tracking-wide mb-6 text-center">Create New Post</h1>

      <input
        type="text"
        placeholder="Sport Name"
        className="border p-3 w-full mb-4 text-lg rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400"
        value={post.sports}
        onChange={(e) => setPost({ ...post, sports: e.target.value })}
      />

      {/* Roadmap Image Upload */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-blue-900 mt-6 mb-2">Roadmap Image</h2>
        <input
          type="file"
          accept="image/*"
          className="border p-3 w-full text-lg rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400"
          onChange={handleFileChange}
        />
        {post.roadmapImg && (
          <img
            src={post.roadmapImg}
            alt="Roadmap Preview"
            className="mt-4 w-full h-64 object-cover rounded-lg"
          />
        )}
      </div>

      {renderSection('Feature', post.Feature)}
      {renderSection('Ruls', post.Ruls)}
      {renderSection('physical_helth', post.physical_helth)}
      {renderSection('mental_helth', post.mental_helth)}
      {renderSection('scholarship_12th', post.scholarship_12th)}
      {renderSection('scholarship_collage', post.scholarship_collage)}

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
