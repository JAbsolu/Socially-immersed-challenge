import './App.css';
import React from 'react';
import Home from './home/home';
import SigninPage from './signin/signin';
import SignUp from './signup/signup';
import Dashboard from './dashboard/dashboard';
import Community from './community/community';
import {Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/signin" element={<SigninPage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/communities" element={<Community/>} />
    </Routes>  
  )
};

export default App;
