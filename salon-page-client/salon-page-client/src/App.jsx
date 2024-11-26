import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Pricing from './pages/Pricing';
import Login from './pages/Login';
import Register from './pages/Register';
import StaffDashboard from './pages/StaffDashboard';
import AddStaff from './pages/AddStaff';
import EditStaff from './pages/EditStaff';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/staff" element={<StaffDashboard />} />
          <Route path="/staff/add" element={<AddStaff />} />
          <Route path="/staff/:id/edit" element={<EditStaff />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;