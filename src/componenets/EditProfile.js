import React, { useState } from "react";
import { Button, Box, Typography, TextField, Avatar } from "@mui/material";
import cover from "../assets/cover.svg"; 
import profilepic from "../assets/profilepic.svg"; 

const EditProfile = () => {
  const [name, setName] = useState("Sakshi Agarwaal");
  const [bio, setBio] = useState("Just someone who loves designing, sketching, and finding beauty in the little things 💕");

  const handleSave = () => {
    alert("Profile Saved");
    // Here you can handle saving the profile (API call, etc.)
  };

  return (
    <Box sx={{ width: "100%", height: "auto", display: "flex", flexDirection: "column", alignItems: "center", padding: 2, backgroundColor: "#f5f5f5" }}>
      <Box sx={{ width: "110%", height: "200px", backgroundImage: `url(${cover})`, backgroundSize: "cover", backgroundPosition: "center", position: "relative", marginTop: '-15px' }}>
        <Avatar src={profilepic} sx={{ width: 150, height: 150, border: "5px solid white", position: "absolute", bottom: "-75px", left: "20%", transform: "translateX(-50%)" }} />
      </Box>

      <Box sx={{ marginTop: 10, width: "80%" }}>
        <Typography variant="h4" sx={{ fontWeight: '700', marginBottom: 2 }}>Edit Profile</Typography>

        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          variant="outlined"
          sx={{ marginBottom: 3 }}
        />
        <TextField
          label="Bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          fullWidth
          variant="outlined"
          multiline
          rows={4}
        />

        <Box sx={{ width: "100%", display: "flex", justifyContent: "flex-end", marginTop: 3 }}>
          <Button variant="contained" sx={{ borderRadius: '20px', width: "260px", backgroundColor: "white", color: "black", border: "1px solid gray", "&:hover": { backgroundColor: "white", borderColor: "black" }}} onClick={handleSave}>
            Save
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default EditProfile;
