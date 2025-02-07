import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const TournamentDetails = () => {
  const { sports_name } = useParams();
  const [tournament, setTournament] = useState(null);

  useEffect(() => {
    const fetchTournament = async () => {
      try {
        const response = await axios.get(`https://sports-app-backend-a5bh.onrender.com/api/tournament/sportsname/${sports_name}`);
        setTournament(response.data.data);
      } catch (error) {
        console.error("Error fetching tournament details:", error.message);
      }
    };

    fetchTournament();
  }, [sports_name]);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      {tournament ? (
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4 text-center text-blue-600">
            {tournament.name}
          </h1>
          <p>
            <strong>Event Code:</strong> {tournament.eventCode}
          </p>
          <p>
            <strong>Place:</strong> {tournament.place}
          </p>
          <p>
            <strong>Start Date:</strong> {new Date(tournament.startDate).toLocaleDateString()}
          </p>
          <p>
            <strong>End Date:</strong> {new Date(tournament.endDate).toLocaleDateString()}
          </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default TournamentDetails;
