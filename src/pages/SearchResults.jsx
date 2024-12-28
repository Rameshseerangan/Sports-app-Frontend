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
        const response = await axios.get(`/api/search?sportName=${query}`);
        setResult(response.data);
      } catch (error) {
        alert('Failed to fetch search results');
      }
    };

    if (query) {
      fetchData();
    }
  }, [query]);

  // Section content
  const sections = {
    'Feature Career': result?.feature || 'Details not available.',
    'Sports Regimens': 'Sports regimens focus on structured schedules to improve skills and endurance.',
    'Physical Fitness': 'Physical fitness involves strength, agility, and stamina building through sports.',
    'Medical Fitness': 'Medical fitness ensures you are physically capable of participating in sports safely.',
    'Scholarship for 12th Std': 'Maintain excellent grades in core subjects and actively participate in sports competitions from 1st to 10th.',
    'Scholarship for College': 'Achieve top results in 12th and participate in national-level sports events for eligibility.'
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-r from-green-500 to-blue-700 text-white">
      {/* Sidebar */}
      <div className="w-1/4 bg-white text-blue-900 p-6 shadow-lg">
        <h2 className="text-xl font-bold mb-4">Navigation</h2>
        <ul className="space-y-3">
          {Object.keys(sections).map((section) => (
            <li
              key={section}
              onClick={() => setActiveSection(section)}
              className={`cursor-pointer p-2 rounded ${
                activeSection === section ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'
              }`}
            >
              {section}
            </li>
          ))}
        </ul>
      </div>

      {/* Content Area */}
      <div className="w-3/4 p-8">
        <h1 className="text-3xl font-bold mb-6">{activeSection}</h1>
        <p className="text-lg bg-white p-4 rounded shadow-md text-blue-900">
          {sections[activeSection]}
        </p>
      </div>
    </div>
  );
};

export default SearchResults;
