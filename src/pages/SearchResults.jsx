import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const SearchResults = () => {
  const [result, setResult] = useState(null);
  const [activeSection, setActiveSection] = useState('Feature Career');
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('sportName');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://sports-app-backend-a5bh.onrender.com/api/post/sports/search?sportName=${query}`);
        setResult(response.data.data[0]); // Assuming response contains 'data' as an array
      } catch (error) {
        alert('Failed to fetch search results');
      }
    };

    if (query) {
      fetchData();
    }
  }, [query]);

  const sections = {
    'Feature Career': result?.Feature
      ? result.Feature.map((item, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-xl font-bold text-blue-900">{item.subheading}</h3>
            <p className="text-md text-gray-900">{item.content}</p>
          </div>
        ))
      : 'Details not available.',
    'Sports Regimens': result?.Ruls
      ? result.Ruls.map((item, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-xl font-bold text-blue-900">{item.subheading}</h3>
            <p className="text-md text-gray-900">{item.content}</p>
          </div>
        ))
      : 'Details not available.',
    'Physical Fitness': result?.physical_helth
      ? result.physical_helth.map((item, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-xl font-bold text-blue-700">{item.subheading}</h3>
            <p className="text-md text-gray-700">{item.content}</p>
          </div>
        ))
      : 'Details not available.',
    'Medical Fitness': result?.mental_helth
      ? result.mental_helth.map((item, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-xl font-bold text-blue-700">{item.subheading}</h3>
            <p className="text-md text-gray-700">{item.content}</p>
          </div>
        ))
      : 'Details not available.',
    'Scholarship for 12th Std': result?.scholarship_12th
      ? result.scholarship_12th.map((item, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-xl font-bold text-blue-700">{item.subheading}</h3>
            <p className="text-md text-gray-700">{item.content}</p>
          </div>
        ))
      : 'Details not available.',
    'Scholarship for College': result?.scholarship_collage
      ? result.scholarship_collage.map((item, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-xl font-bold text-blue-700">{item.subheading}</h3>
            <p className="text-md text-gray-700">{item.content}</p>
          </div>
        ))
      : 'Details not available.',
  };

  return (
    <div className="min-h-screen bg-[url(/src/assets/sportsbg1.webp)] from-green-400 via-blue-500 to-indigo-600 text-white flex font-poppins">
      {/* Sidebar */}
      <div className="w-1/4 bg-white/50 text-blue-900 p-8 shadow-lg rounded-l-xl">
        <h2 className="text-3xl font-extrabold mb-8 text-center">Sections</h2>
        <ul className="space-y-6">
          {Object.keys(sections).map((section) => (
            <li
              key={section}
              onClick={() => setActiveSection(section)}
              className={`cursor-pointer p-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
                activeSection === section
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-800 text-white shadow-xl'
                  : 'hover:bg-gray-100 hover:text-blue-800'
              }`}
            >
              {section}
            </li>
          ))}
        </ul>
      </div>

      {/* Content Area */}
      <div className="w-3/4 p-12 overflow-y-auto">
        <h1 className="text-4xl font-extrabold mb-12  text-center border-b-4 border-white pb-4">
          {activeSection}
        </h1>
        <div className="space-y-8">
          {sections[activeSection] && (
            <div className="bg-white/70 text-blue-950 p-8 rounded-lg shadow-xl hover:scale-105 transition-all duration-300">
              <h2 className="text-2xl font-semibold mb-4 text-blue-700">{activeSection}</h2>
              <div className="text-lg">{sections[activeSection]}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
