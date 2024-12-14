import React, { useState } from "react";
import { Box, Typography, Card, CardMedia, IconButton } from "@mui/material";
import { useLocation } from "react-router-dom";
import Hicamera from "../assets/HiCamera.svg";
import Hicash from "../assets/HiCash.svg";
import img1 from "../assets/img1.svg";  // Import img1
import img2 from "../assets/img2.svg";  // Import img2
import img3 from "../assets/img3.svg";  // Import img3
import Header from "./Header.js"; 

const Gallery = () => {
  const location = useLocation();  // Get passed state from Profile component
  const { selectedImage } = location.state || {};  // Get the selected image

  const [galleryImages, setGalleryImages] = useState([
    selectedImage || img1, // Use imported img1 as the default selected image
    img2,                    // Use imported img2 for another gallery image
    img3,                    // Use imported img3 for another gallery image
    "https://via.placeholder.com/300/FF0000/FFFFFF?Text=Image2", // Example static image
    "https://via.placeholder.com/300/00FF00/FFFFFF?Text=Image3", // Example static image
  ]);

  const [topImage, setTopImage] = useState(selectedImage || galleryImages[0]);  // State for the image displayed on top

  // Handle the file input change (selecting a new image)
  const handleImageChange = (e) => {
    const files = e.target.files;
    if (files && files[0]) {
      const file = files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        setGalleryImages((prevImages) => [reader.result, ...prevImages]);  // Add it to the gallery images
      };
      
      reader.readAsDataURL(file);  // Read the file as base64
    }
  };

  // Handle image click to update the top image
  const handleImageClick = (img) => {
    setTopImage(img);  // Set the clicked image as the top image
  };

  return (
    <Box sx={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "#f5f5f5" }}>
      {/* Display the selected image at the top */}
      {/* Display the selected image at the top */}
      <Header pageName="Gallery" selectedImage={topImage} />

      <Box sx={{ width: "100%", height: "50%", marginBottom: 0 }}>
        <Card sx={{ height: "100%", borderRadius: "0" }}> {/* Removed border-radius here */}
          <CardMedia component="img" height="100%" image={topImage} alt="Selected Image" sx={{ objectFit: "cover", borderRadius: "0" }} /> {/* Removed border-radius here */}
        </Card>
      </Box>

      {/* White box with Gallery and custom icons */}
      <Box sx={{
        width: "92%",
        backgroundColor: "#fff",
        padding: 2,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>Gallery</Typography>
        <Box>
          {/* HiCash Icon with black circle background */}
          <IconButton sx={{
            marginRight: 2,
            backgroundColor: "black",
            borderRadius: "50%",
            padding: "9px", // Adds some space around the icon inside the circle
          }}>
            <img src={Hicash} alt="HiCash" style={{ width: "30px", height: "30px" }} />
          </IconButton>

          {/* HiCamera Icon */}
          <IconButton onClick={() => document.getElementById('upload-image').click()} sx={{
            marginRight: 2,
            backgroundColor: "",
            borderRadius: "50%",
            padding: "9px", // Adds some space around the icon inside the circle
          }}>
            <img src={Hicamera} alt="HiCamera" style={{ width: "30px", height: "30px" }} />
          </IconButton>
        </Box>
      </Box>

      {/* Upload new image */}
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: "none" }}
        id="upload-image"
        capture="environment"  // This prompts the user to capture a photo using the device's camera (on mobile devices)
      />

      {/* Display gallery images in cards */}
      <Box sx={{ width: "100%", display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
        {galleryImages.map((img, index) => (
          <Card key={index} sx={{ width: "32%", marginBottom: 2, position: "relative" }} onClick={() => handleImageClick(img)}>
            <CardMedia 
            component="img" 
            height="100%" 
            image={img} 
            alt={`Gallery image ${index + 1}`}

            sx={{ objectFit: "cover", height: "200px", borderRadius: "none" }} 
            />
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Gallery;
