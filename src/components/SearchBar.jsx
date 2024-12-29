import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [selectedSport, setSelectedSport] = useState('');
  const [userType, setUserType] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!selectedSport || !userType) {
      alert('Please select a sport and user type.');
      return;
    }
    // Navigate to the search results page with selected sport and user type as query parameters
    navigate(`/search-results?sportName=${selectedSport}&userType=${userType}`);
  };

  const sports = ['Volleyball', 'Badminton', 'Cricket', 'Chess', 'Football'];

  return (
    <div className="h-screen w-full bg-[url(/src/assets/sportsbg1.webp)] bg-cover bg-center flex items-center justify-center">
      <form
        onSubmit={handleSearch}
        className="bg-white/70 p-8 rounded-lg shadow-2xl w-11/12 max-w-2xl flex flex-col items-center space-y-6 border-t-4 border-yellow-400 font-poppins"
      >
        <h1 className="text-4xl font-extrabold text-blue-900 uppercase tracking-wide text-center md:text-5xl">
          Explore Your Favorite Sports
        </h1>
        <div className="w-full">
          <label className="block text-lg font-semibold text-gray-700 mb-2">
            Select a Sport
          </label>
          <select
            value={selectedSport}
            onChange={(e) => setSelectedSport(e.target.value)}
            className="w-full border border-gray-300 p-4 rounded-lg text-lg focus:outline-none focus:ring-4 focus:ring-blue-400"
          >
            <option value="" disabled>
              Choose a sport
            </option>
            {sports.map((sport) => (
              <option key={sport} value={sport.toLowerCase()}>
                {sport}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full">
          <label className="block text-lg font-semibold text-gray-700 mb-2">
            You are a:
          </label>
          <div className="flex space-x-4">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="userType"
                value="student"
                checked={userType === 'student'}
                onChange={(e) => setUserType(e.target.value)}
                className="h-5 w-5 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-lg">Student</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="userType"
                value="faculty"
                checked={userType === 'faculty'}
                onChange={(e) => setUserType(e.target.value)}
                className="h-5 w-5 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-lg">Faculty</span>
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-green-500 to-blue-700 text-white py-3 rounded-lg font-bold text-lg hover:shadow-lg transition duration-300"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
