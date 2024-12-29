import React, { useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [post, setPost] = useState({
    sports: '',
    feature: {
      professionalPlayer: '',
      coachTrainer: '',
      sportsAnalyst: '',
      umpire: '',
      fitnessTrainer: '',
      administratorManager: '',
      successStories: '',
      earningsAndGrowth: '',
    },
    sportsRegimens: {
      warmUp: '',
      technicalSkills: '',
      tacticalTraining: '',
      physicalConditioning: '',
      nutritionPlan: '',
    },
    physicalFitness: {
      fitnessRequirements: '',
      recommendedExercises: '',
    },
    medicalFitness: {
      healthStandards: '',
      preventiveMeasures: '',
      commonInjuries: '',
    },
    scholarship12th: {
      achievements: '',
      academicStandards: '',
      documentation: '',
    },
    scholarshipCollege: {
      sportsAchievements: '',
      academicCriteria: '',
      selectionProcess: '',
      bonusPoints: '',
    },
  });

  const handleChange = (section, field, value) => {
    setPost((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
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

  return (
    <form onSubmit={handleSubmit} className="w-11/12 max-w-4xl mx-auto mt-10 bg-white/70 p-8 rounded-lg shadow-2xl font-poppins">
      <h1 className="text-3xl font-extrabold text-blue-900 uppercase tracking-wide mb-6 text-center">Create New Post</h1>

      <input
        type="text"
        placeholder="Sport Name"
        className="border p-3 w-full mb-4 text-lg rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400"
        onChange={(e) => setPost({ ...post, sports: e.target.value })}
      />

      <h2 className="text-xl font-bold text-blue-900 mt-6 mb-2">Feature</h2>
      {Object.keys(post.feature).map((key) => (
        <input
          key={key}
          type="text"
          placeholder={key.replace(/([A-Z])/g, ' $1')}
          className="border p-3 w-full mb-4 text-lg rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400"
          onChange={(e) => handleChange('feature', key, e.target.value)}
        />
      ))}

      <h2 className="text-xl font-bold text-blue-900 mt-6 mb-2">Sports Regimens</h2>
      {Object.keys(post.sportsRegimens).map((key) => (
        <input
          key={key}
          type="text"
          placeholder={key.replace(/([A-Z])/g, ' $1')}
          className="border p-3 w-full mb-4 text-lg rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400"
          onChange={(e) => handleChange('sportsRegimens', key, e.target.value)}
        />
      ))}

      <h2 className="text-xl font-bold text-blue-900 mt-6 mb-2">Physical Fitness</h2>
      {Object.keys(post.physicalFitness).map((key) => (
        <input
          key={key}
          type="text"
          placeholder={key.replace(/([A-Z])/g, ' $1')}
          className="border p-3 w-full mb-4 text-lg rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400"
          onChange={(e) => handleChange('physicalFitness', key, e.target.value)}
        />
      ))}

      <h2 className="text-xl font-bold text-blue-900 mt-6 mb-2">Medical Fitness</h2>
      {Object.keys(post.medicalFitness).map((key) => (
        <input
          key={key}
          type="text"
          placeholder={key.replace(/([A-Z])/g, ' $1')}
          className="border p-3 w-full mb-4 text-lg rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400"
          onChange={(e) => handleChange('medicalFitness', key, e.target.value)}
        />
      ))}

      <h2 className="text-xl font-bold text-blue-900 mt-6 mb-2">Scholarship for 12th</h2>
      {Object.keys(post.scholarship12th).map((key) => (
        <input
          key={key}
          type="text"
          placeholder={key.replace(/([A-Z])/g, ' $1')}
          className="border p-3 w-full mb-4 text-lg rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400"
          onChange={(e) => handleChange('scholarship12th', key, e.target.value)}
        />
      ))}

      <h2 className="text-xl font-bold text-blue-900 mt-6 mb-2">Scholarship for College</h2>
      {Object.keys(post.scholarshipCollege).map((key) => (
        <input
          key={key}
          type="text"
          placeholder={key.replace(/([A-Z])/g, ' $1')}
          className="border p-3 w-full mb-4 text-lg rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400"
          onChange={(e) => handleChange('scholarshipCollege', key, e.target.value)}
        />
      ))}

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
