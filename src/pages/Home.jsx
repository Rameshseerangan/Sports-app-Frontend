import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';

const Home = () => {
  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-2xl font-bold w-full h-10 bg-gradient-to-r from-green-500 to-blue-700 flex items-center justify-center font-poppins">
        Welcome to ShineSports
      </h1>
      <SearchBar />
    </div>
  );
};

export default Home;
