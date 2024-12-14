import React from "react";
import { Box, IconButton, Typography, Button } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate, useLocation } from "react-router-dom";

const Header = ({ pageName, onRightTextClick, selectedImage }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Define the pages where the "Next" button should appear
  const pagesWithButton = ["/gallery"];

  const handleNextClick = () => {
    if (selectedImage) {
      navigate("/create-post", { state: { image: selectedImage } });
    } else {
      alert("Please select an image before proceeding!");
    }
  };

  // Check if the current page is "Create Post"
  const isCreatePostPage = location.pathname === "/create-post";

  return (
    <Box
      sx={{
        position: "absolute",
        top: 20,
        left: 20,
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        width: "90%",
        justifyContent: "space-between",
        backgroundColor: "transparent", // Transparent background for all pages
        padding: 1, // Add padding for better layout
        borderRadius: 2, // Optionally, add rounded corners
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <IconButton onClick={() => navigate(-1)} sx={{ color: isCreatePostPage ? "black" : "white" }}>
          <ArrowBackIosIcon />
        </IconButton>
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            marginLeft: 2,
            color: isCreatePostPage ? "black" : "white", // Black text for "Create Post" page
          }}
        >
          {pageName}
        </Typography>
      </Box>

      {pagesWithButton.includes(location.pathname) && (
        <Button
          style={{
            color: isCreatePostPage ? "black" : "white", // Black button color for "Create Post" page
            textTransform: "none",
            marginRight: 1,
            fontWeight: "bold",
          }}
          onClick={handleNextClick}
        >
          Next
        </Button>
      )}
    </Box>
  );
};

export default Header;
