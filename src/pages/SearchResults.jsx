import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const SearchResults = () => {
  const [result, setResult] = useState(null);
  const [tournament, setTournament] = useState([]); // State for tournament details
  const [activeSection, setActiveSection] = useState('Feature Career');
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('sportName');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://sports-app-backend-a5bh.onrender.com/api/post/sports/search?sportName=${query}`
        );
        setResult(response.data.data[0]); // Assuming response contains 'data' as an array
      } catch (error) {
        alert('Failed to fetch search results');
      }
    };
  
    const fetchTournaments = async () => {
      try {
        console.log("Fetching tournaments with query:", query); // Log the query
        const response = await axios.get(
          `http://localhost:4000/api/tournament/sportsname`,
          {
            params: { 
              sports_name: query }, // Pass query as a parameter
          }
        );
        console.log("API Response:", response.data); // Log response
        setTournament(response.data.data ? [response.data.data] : []);
      } catch (error) {
        console.error("Error fetching tournament details:", error.message);
      }
    };
    
  
    if (query) {
      fetchData();
      fetchTournaments(); // Fetch tournament data
    }
  }, [query]);
  

  const isValidUrl = (string) => {
    try {
      new URL(string);
      return true;
    } catch {
      return false;
    }
  };

  const renderContent = (item) => {
    return isValidUrl(item.content) ? (
      <a
        href={item.content}
        target="_blank"
        rel="noopener noreferrer"
        className="text-md text-blue-500 underline hover:text-blue-700"
      >
        View PDF
      </a>
    ) : (
      <p className="text-md text-black">{item.content}</p>
    );
  };

  const sections = {
    'Feature Career': result?.Feature
      ? result.Feature.map((item, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-xl font-bold text-blue-900">{item.subheading}</h3>
            <p className="text-md text-black">{item.content}</p>
          </div>
        ))
      : 'Details not available.',
    'Sports Regimens': result?.Ruls
  ? result.Ruls.map((item, index) => (
      <div key={index} className="mb-4">
        <h3 className="text-xl font-bold text-blue-900">{item.subheading}</h3>
        {renderContent(item)}
      </div>
    ))
  : 'Details not available.',
    'Physical Fitness': result?.physical_strength
      ? result.physical_strength.map((item, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-xl font-bold text-blue-700">{item.subheading}</h3>
            <p className="text-md text-black">{item.content}</p>
          </div>
        ))
      : 'Details not available.',
    'Medical Fitness': result?.mental_strength
      ? result.mental_strength.map((item, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-xl font-bold text-blue-700">{item.subheading}</h3>
            <p className="text-md text-black">{item.content}</p>
          </div>
        ))
      : 'Details not available.',
    'Scholarship for 12th Std': result?.scholarship_12th
      ? result.scholarship_12th.map((item, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-xl font-bold text-blue-700">{item.subheading}</h3>
            {renderContent(item)}
          </div>
        ))
      : 'Details not available.',
    'Scholarship for College': result?.scholarship_collage
      ? result.scholarship_collage.map((item, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-xl font-bold text-blue-700">{item.subheading}</h3>
            {renderContent(item)}
          </div>
        ))
      : 'Details not available.',
    'Achievement for Jobs': result?.Achivement_for_Jobs
      ? result.Achivement_for_Jobs.map((item, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-xl font-bold text-blue-700">{item.subheading}</h3>
            {renderContent(item)}
          </div>
        ))
      : 'Details not available.',
    'Tournaments': tournament.length
  ? (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tournament.map((item, index) => (
          <div
            key={index}
            className="bg-white text-blue-900 rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-bold mb-4">{item.name}</h3>
            <p className="text-md">
              <strong>Event Code:</strong> {item.eventCode}
            </p>
            <p className="text-md">
              <strong>Place:</strong> {item.place}
            </p>
            <p className="text-md">
              <strong>Start Date:</strong> {new Date(item.startDate).toLocaleDateString()}
            </p>
            <p className="text-md">
              <strong>End Date:</strong> {new Date(item.endDate).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    )
  : 'No tournaments available.',

  };

  return (
    <div className="min-h-screen bg-[url(/src/assets/sportsbg1.webp)] from-green-400 via-blue-500 to-indigo-600 text-white flex font-poppins">
      {/* Sidebar */}
      <div className="w-1/4 bg-white/70 text-blue-900 p-8 shadow-lg rounded-l-xl">
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
        <h1 className="text-4xl font-extrabold mb-12 text-center border-b-4 border-white pb-4">
          {activeSection}
        </h1>
        <div className="space-y-8">
          {sections[activeSection] && (
            <div className="bg-white/90 text-blue-950 p-8 rounded-lg shadow-xl hover:scale-105 transition-all duration-300">
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
