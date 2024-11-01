// frontend/src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar"; // Regular NavBar for users
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Logout from './components/Logout';
import Home from "./components/Home"; 
import Register from "./components/Register";
import AdminDashboard from './components/AdminDashboard'; // Import Admin Dashboard
import AIChatbot from './components/AIChatbot';
import Booking from "./components/Booking";
import Catalogue from './components/catalogue'; // User Catalogue
import Users from './adminComponents/Users'; // Admin components
import AdminCatalogue from './adminComponents/Catalogue'; 
import PetsInfo from './adminComponents/PetsInfo';
import Bookings from './adminComponents/Bookings';
import Certifications from './adminComponents/Certifications';
import AdminChatBot from './adminComponents/ChatBot'; 
//import AdminNavBar from './adminComponents/AdminNavBar'; // Correct path and case

const App = () => {
  return (
    <Router>
      <div>
        <NavBar /> {/* This will be the main menu for users */}
        <Routes>
          {/* Public and user routes */}
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/chatbot" element={<AIChatbot />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/catalogue" element={<Catalogue />} />
          
          {/* Admin routes */}
          <Route path="/admin-dashboard" element={<AdminDashboard />} /> {/* Admin dashboard */}
          <Route path="/admin/users" element={<Users />} /> {/* Admin-specific routes */}
          <Route path="/admin/catalogue" element={<AdminCatalogue />} />
          <Route path="/admin/pets-info" element={<PetsInfo />} />
          <Route path="/admin/bookings" element={<Bookings />} />
          <Route path="/admin/certifications" element={<Certifications />} />
          <Route path="/admin/chatbot" element={<AdminChatBot />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

