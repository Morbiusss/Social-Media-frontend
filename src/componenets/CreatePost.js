import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Typography, Button, TextField } from "@mui/material";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { app,db } from "../firebase/firebaseConfig.js"; // Import your Firebase app configuration
import Header from "./Header.js";

const CreatePost = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { image } = location.state || {}; // Get the passed image from state
  const [caption, setCaption] = useState("");
  

  // Initialize Firestore
  const db = getFirestore(app);

  // Handle the post creation and save to Firestore
  const handleSubmitPost = async () => {
    if (!caption || !image) {
      alert("Please add a caption and image to your post.");
      return;
    }

    try {
      // Add new post to Firestore
      await addDoc(collection(db, "posts"), {
        image: image,   // URL or path to the image
        caption: caption,
        timestamp: new Date(),  // Add timestamp to order posts
      });

      alert("Post created successfully!");
      navigate("/"); // Redirect to home or another page
    } catch (error) {
      console.error("Error adding post: ", error);
      alert("Error creating post.");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 1,
        backgroundColor: "#f5f5f5",
        minHeight: "80vh",
        justifyContent: "space-between",
      }}
    >
      <Header pageName="Gallery" sx={{ color: "black" }} />

      {image && (
        <img
          src={image}
          alt="Selected for post"
          style={{
            width: "80%",
            maxWidth: "400px",
            marginBottom: "20px",
            borderRadius: "15px",
            marginTop: "100px",
          }}
        />
      )}
      <TextField
        label="Caption"
        variant="outlined"
        fullWidth
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
        sx={{ marginBottom: 60 }}
      />
      <Button
        variant="contained"
        color="black"
        onClick={handleSubmitPost}
        sx={{
          marginTop: 2,
          position: "absolute",
          bottom: 10,
          bgcolor: "black",
          color: "white",
          width: "80%",
          borderRadius: "10px",
        }}
      >
        Create
      </Button>
    </Box>
  );
};

export default CreatePost;
