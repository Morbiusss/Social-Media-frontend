import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../src/componenets/Login.js";
import Home from "../src/componenets/Home.js";
import Profile from "../src/componenets/profile.js";
import Editprofile from "../src/componenets/EditProfile.js";
import EditProfile from "../src/componenets/EditProfile.js"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit-profile" element={<Editprofile />} />
        
      </Routes>
    </Router>
  );
};

export default App;
