import React from "react";
import { Button, Box, Typography } from "@mui/material";
import { signInWithGoogle } from "../firebase/firebaseConfig.js";
import { useNavigate } from "react-router-dom";
import GoogleLogo from "../assets/GoogleLOGO.svg";
import BackgroundImage from "../assets/loginpage.svg"; // Add your SVG image here
import VibesnapLogo from "../assets/applogo.svg"; // Import your logo here

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async () => {
    const user = await signInWithGoogle();
    if (user) {
      navigate("/home");
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="90vh"
      sx={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Content Section with white background, positioned at the bottom */}
      <Box
        sx={{
          width: "100%",
          height: "50%",  // Adjusted height for the content box
          display: "flex",
          flexDirection: "column",
        //   justifyContent: "center",
        paddingTop:'50px',
          alignItems: "center",
          backgroundColor: "white",
          borderTopLeftRadius: "60px",  // Rounded top corners
          borderTopRightRadius: "60px", // Rounded top corners
          marginTop: "400px", // Pushes the content section to the bottom
        }}
      >
        {/* Vibesnap logo and title */}
        <Box display="flex" alignItems="center" marginBottom="16px">
          <img
            src={VibesnapLogo}
            alt="Vibesnap Logo"
            style={{ width: 40, height: 40, marginRight: 8 }}
          />
        <Typography
  variant="h4"
  sx={{ fontWeight: 600 }} // Semi-bold weight
>
  Vibesnap
</Typography>

        </Box>
        <Typography 
  sx={{
    textAlign: "center", 
    marginBottom: "16px", 
    fontFamily: "Kumbh Sans", 
    fontWeight: 400,  // Regular weight
    fontSize: "20px"
  }}
>
  Moments That Matter, Shared Forever.
</Typography>

        <Button
          variant="contained"
          onClick={handleLogin}
          sx={{
            width: "100%",
            maxWidth: 250,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "12px 16px",
            marginTop: "16px",
            backgroundColor: "rgba(41, 41, 41, 1)",
            borderRadius: "25px",
          }}
        >
          <img
            src={GoogleLogo}
            alt="Google Logo"
            style={{
              width: 20,
              height: 20,
              marginRight: 8,
            }}
          />
          Continue with Google
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
