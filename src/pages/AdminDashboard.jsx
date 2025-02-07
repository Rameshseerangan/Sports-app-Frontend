import React, { useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [post, setPost] = useState({
    sports: "",
    roadmapImg: "",
    Feature: [
      { subheading: "Professional Player", content: "" },
      { subheading: "Coach/Trainer", content: "" },
      { subheading: "Sports Analyst/Commentator", content: "" },
      { subheading: "Umpire/Match Official", content: "" },
      { subheading: "Fitness Trainer", content: "" },
      { subheading: "Administrator/Manager", content: "" },
      { subheading: "Success Stories", content: "" },
      { subheading: "Earnings and Growth", content: "" },
    ],
    Ruls: [
      { subheading: "International Rules", content: "" },
      { subheading: "Domestic Rules", content: "" },
    ],
    physical_strength: [
      { subheading: "Fitness Requirements", content: "" },
      { subheading: "Recommended Exercises", content: "" },
    ],
    mental_strength: [
      { subheading: "Health Standards", content: "" },
      { subheading: "Preventive Measures", content: "" },
      { subheading: "Common Injuries", content: "" },
    ],
    scholarship_12th: [
      { subheading: "Requirements", content: "" },
      { subheading: "Infolink", content: "" },
    ],
    scholarship_collage: [
      { subheading: "Requirements", content: "" },
      { subheading: "Infolink", content: "" },
    ],
    Achivement_for_Jobs: [
      { subheading: "Requirements", content: "" },
      { subheading: "Infolink", content: "" },
    ],
  });

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await axios.post(
        "https://your-backend-url/api/upload", // Replace with actual backend URL
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      setPost({ ...post, roadmapImg: response.data.imageUrl });
      alert("Image uploaded successfully!");
    } catch (error) {
      console.error("Error uploading image:", error.response?.data || error.message);
      alert("Failed to upload image");
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
            onChange={(e) =>
              handleChange(sectionName, index, "subheading", e.target.value)
            }
          />
          <textarea
            placeholder="Content"
            className="border p-3 w-full text-lg rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400"
            value={item.content}
            onChange={(e) =>
              handleChange(sectionName, index, "content", e.target.value)
            }
          />
        </div>
      ))}
    </div>
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Log payload for debugging
    console.log("Submitting post:", post);

    // Validate required fields
    if (!post.sports.trim()) {
      alert("Sport Name is required");
      return;
    }

    try {
      const token = localStorage.getItem("authToken");
      const response = await axios.post(
        "https://sports-app-backend-a5bh.onrender.com/api/post/create",
        post,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      alert(response.data.message || "Post created successfully!");
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Failed to create post");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-11/12 max-w-4xl mx-auto mt-10 bg-white/70 p-8 rounded-lg shadow-2xl font-poppins"
    >
      <h1 className="text-3xl font-extrabold text-blue-900 uppercase tracking-wide mb-6 text-center">
        Create New Post
      </h1>

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

      {renderSection("Feature", post.Feature)}
      {renderSection("Ruls", post.Ruls)}
      {renderSection("physical_strength", post.physical_strength)}
      {renderSection("mental_strength", post.mental_strength)}
      {renderSection("scholarship_12th", post.scholarship_12th)}
      {renderSection("scholarship_collage", post.scholarship_collage)}
      {renderSection("Achivement_for_Jobs", post.Achivement_for_Jobs)}

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
