import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Remove authentication data from localStorage
    localStorage.removeItem("authToken");
    localStorage.removeItem("userRole");

    // Show logout success message
    toast.success("Logged out successfully!");

    // Redirect to login page
    navigate("/");
  }, [navigate]);

  return null; // No UI needed for logout
};

export default Logout;
