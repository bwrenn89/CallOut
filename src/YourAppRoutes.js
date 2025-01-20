import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Chatbox from './Chatbox';

const YourAppRoutes = ({ user }) => {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard user={user} />} />
        <Route path="/chatbox" element={<Chatbox user={user} />} />
      </Routes>
    </Router>
  );
};

export default YourAppRoutes;
