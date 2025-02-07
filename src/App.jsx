import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Signup from './pages/Signup';
import Login from './pages/login';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import AdminDashboard from './pages/AdminDashboard';
import SearchResults from './pages/SearchResults';
import SportsCareer from './pages/Exports';
import CreateTournament from "./pages/CreateTournament";

import Logout from './pages/Logout';
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/search-results" element={<SearchResults />} />
        <Route path="/sports-career" element={<SportsCareer />} />
        <Route path='/createtornament' element={<CreateTournament/>}/>
        
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
  );
};

export default App;