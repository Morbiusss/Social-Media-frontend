import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../src/componenets/Login.js";
import Home from "../src/componenets/Home.js";
import Profile from "../src/componenets/profile.js";
import Editprofile from "../src/componenets/EditProfile.js";

import { ProfileProvider } from "../src/context/ProfileContext";
import Gallery from "../src/componenets/Gallary.js";
import CreatePost from "../src/componenets/CreatePost.js"

const App = () => {
  return (
    <ProfileProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit-profile" element={<Editprofile />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/create-post" element={<CreatePost />} />
        
      </Routes>
    </Router>
    </ProfileProvider>
  );
};

export default App;
