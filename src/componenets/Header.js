import React from "react";
import { Box, IconButton,Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";

const Header = ( {pageName}) => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        position: "absolute",
        top: 20, // Adjust the distance from the top
        left: 20, // Adjust the distance from the left
        zIndex: 1000, // Ensure the icon stays on top
      }}
    >
      <IconButton onClick={() => navigate(-1)} sx={{ color: "white" }}>
        <ArrowBackIosIcon />
        <Typography
        variant="h6"
        sx={{
          fontWeight: "bold",
          marginLeft: 2,
        }}
      >
        {pageName}
      </Typography>
      </IconButton>
      
    </Box>
  );
};

export default Header;
