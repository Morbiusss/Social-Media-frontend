import React, { useState, useContext } from "react";
import { Button, Box, Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ProfileContext } from "../context/ProfileContext";
import Header from "./Header.js"; // Import Header component
import cover from "../assets/cover.svg";
import profilepic from "../assets/profilepic.svg";

const EditProfile = () => {
  const { name, bio, setName, setBio } = useContext(ProfileContext);
  const navigate = useNavigate();

  const handleSave = () => {
    alert("Profile Saved");
    navigate("/profile");
  };

  return (
    <Box sx={{ width: "100%", height: "100vh", overflow: "auto" }}>
      {/* Add Header with current page name */}
      <Header pageName="Edit Profile" />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 2,
        }}
      >
        <Box
          sx={{
            width: "110%",
            height: "200px",
            backgroundImage: `url(${cover})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
            marginTop: "-15px",
          }}
        >
          <Avatar
            src={profilepic}
            sx={{
              width: 150,
              height: 150,
              border: "5px solid white",
              position: "absolute",
              bottom: "-75px",
              left: "20%",
              transform: "translateX(-50%)",
            }}
          />
        </Box>

        <Box sx={{ marginTop: 10, width: "100%" }}>
          <Box component="div" sx={{ marginBottom: 2 }}>
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                width: "100%",
                padding: "4px 0",
                border: "none",
                borderBottom: "1px solid #ccc",
                outline: "none",
                fontSize: "16px",
                fontWeight: "600",
                lineHeight: "1.5",
              }}
            />
          </Box>
          <Box component="div" sx={{ marginBottom: 3 }}>
            <label>Bio</label>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              rows={3}
              style={{
                width: "100%",
                padding: "4px 0",
                border: "none",
                borderBottom: "1px solid #ccc",
                outline: "none",
                fontSize: "16px",
                fontWeight: "600",
                lineHeight: "1.5",
                resize: "none",
              }}
            />
          </Box>

          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              variant="contained"
              sx={{
                borderRadius: "20px",
                width: "100%",
                backgroundColor: "black",
                color: "white",
                marginTop: "350px",
                border: "1px solid gray",
                "&:hover": { backgroundColor: "white", borderColor: "black" },
              }}
              onClick={handleSave}
            >
              Save
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default EditProfile;
