import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const CreateTournament = () => {
  const [formData, setFormData] = useState({
    name: "",
    eventCode: "",
    place: "",
    startDate: "",
    endDate: "",
  });

  const [submittedTournament, setSubmittedTournament] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/tournament/create",
        formData
      );
      setSubmittedTournament(response.data.data);
      setFormData({
        sports_name: "",
        name: "",
        eventCode: "",
        place: "",
        startDate: "",
        endDate: "",
      });
    } catch (error) {
      console.error("Error creating tournament:", error.response?.data?.message || error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">
          Create Tournament
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Sports Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.sports_name}
              onChange={handleChange}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Tournament Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="eventCode" className="block text-sm font-medium text-gray-700">
              Event Code
            </label>
            <input
              type="text"
              id="eventCode"
              name="eventCode"
              value={formData.eventCode}
              onChange={handleChange}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="place" className="block text-sm font-medium text-gray-700">
              Place
            </label>
            <input
              type="text"
              id="place"
              name="place"
              value={formData.place}
              onChange={handleChange}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
              Start Date
            </label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">
              End Date
            </label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Create Tournament
          </button>
        </form>
        {submittedTournament && (
          <div className="mt-6 p-4 bg-green-100 border border-green-300 rounded-md text-green-800">
            <h2 className="text-lg font-semibold">Tournament Created!</h2>
            <p>
              View Details:{" "}
              <Link
                to={`/tournament/${submittedTournament._id}`}
                target="_blank"
                className="text-blue-500 underline"
              >
                {submittedTournament.name}
              </Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateTournament;
