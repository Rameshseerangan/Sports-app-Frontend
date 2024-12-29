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
        const response = await axios.get(`http://localhost:4000/api/post/sports/search?sportName=${query}`);
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
    'Feature Career': result?.feature
      ? `
      Professional Player: ${result.feature.professionalPlayer || 'N/A'}
      Coach/Trainer: ${result.feature.coachTrainer || 'N/A'}
      Sports Analyst: ${result.feature.sportsAnalyst || 'N/A'}
      Umpire: ${result.feature.umpire || 'N/A'}
      Fitness Trainer: ${result.feature.fitnessTrainer || 'N/A'}
      Administrator/Manager: ${result.feature.administratorManager || 'N/A'}
      Success Stories: ${result.feature.successStories || 'N/A'}
      Earnings and Growth: ${result.feature.earningsAndGrowth || 'N/A'}
      `
      : 'Details not available.',
    'Sports Regimens': result?.sportsRegimens
      ? `
      Warm-Up: ${result.sportsRegimens.warmUp || 'N/A'}
      Technical Skills: ${result.sportsRegimens.technicalSkills || 'N/A'}
      Tactical Training: ${result.sportsRegimens.tacticalTraining || 'N/A'}
      Physical Conditioning: ${result.sportsRegimens.physicalConditioning || 'N/A'}
      Nutrition Plan: ${result.sportsRegimens.nutritionPlan || 'N/A'}
      `
      : 'Details not available.',
    'Physical Fitness': result?.physicalFitness
      ? `
      Fitness Requirements: ${result.physicalFitness.fitnessRequirements || 'N/A'}
      Recommended Exercises: ${result.physicalFitness.recommendedExercises || 'N/A'}
      `
      : 'Details not available.',
    'Medical Fitness': result?.medicalFitness
      ? `
      Health Standards: ${result.medicalFitness.healthStandards || 'N/A'}
      Preventive Measures: ${result.medicalFitness.preventiveMeasures || 'N/A'}
      Common Injuries: ${result.medicalFitness.commonInjuries || 'N/A'}
      `
      : 'Details not available.',
    'Scholarship for 12th Std': result?.scholarship12th
      ? `
      Achievements: ${result.scholarship12th.achievements || 'N/A'}
      Academic Standards: ${result.scholarship12th.academicStandards || 'N/A'}
      Documentation: ${result.scholarship12th.documentation || 'N/A'}
      `
      : 'Details not available.',
    'Scholarship for College': result?.scholarshipCollege
      ? `
      Sports Achievements: ${result.scholarshipCollege.sportsAchievements || 'N/A'}
      Academic Criteria: ${result.scholarshipCollege.academicCriteria || 'N/A'}
      Selection Process: ${result.scholarshipCollege.selectionProcess || 'N/A'}
      Bonus Points: ${result.scholarshipCollege.bonusPoints || 'N/A'}
      `
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
        <h1 className="text-4xl font-extrabold mb-12 text-center border-b-4 border-white pb-4">{activeSection}</h1>
        <div className="space-y-8">
          {sections[activeSection] && (
            <div className="bg-white/70 text-blue-950 p-8 rounded-lg shadow-xl hover:scale-105 transition-all duration-300">
              <h2 className="text-2xl font-semibold mb-4 text-blue-700">{activeSection}</h2>
              <pre className="text-lg whitespace-pre-wrap">{sections[activeSection]}</pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
