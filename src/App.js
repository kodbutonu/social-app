import React from 'react';
import Home from './pages/home/home';
import Login from './components/login/login';
import Register from './components/register/register';
import Profile from './pages/home/profile/profile';
import Reset from './components/reset/reset';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile/" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;