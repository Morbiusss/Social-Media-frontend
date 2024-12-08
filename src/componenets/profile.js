// import React, { useContext } from "react";
// import { Button, Box, Typography, Avatar, Card, CardContent, CardMedia, IconButton } from "@mui/material";
// import { Favorite, Add  } from "@mui/icons-material"; // Import AddCircleOutline icon
// import { useNavigate } from "react-router-dom"; // Import useNavigate hook for navigation
// import cover from "../assets/cover.svg"; 
// import profilepic from "../assets/profilepic.svg"; 
// import img1 from "../assets/img1.svg"; 
// import img2 from "../assets/img2.svg"; 
// import img3 from "../assets/img3.svg"; 
// import { ProfileContext } from "../context/ProfileContext"; // Import ProfileContext
// import Header from "./Header.js"; // Import Header component

// const Profile = () => {
//   const navigate = useNavigate();  // Initialize navigation
//   const { name, bio } = useContext(ProfileContext); // Access context

//   const handleEditProfile = () => {
//     navigate("/edit-profile");  // Navigate to the edit profile page
//   };

//   return (
//     <Box sx={{ width: "100%", height: "auto", display: "flex", flexDirection: "column", alignItems: "center", padding: 2, backgroundColor: "#f5f5f5", overflow: "auto" }}>
//         <Header pageName="Profile" />
//       <Box sx={{ width: "110%", height: "200px", backgroundImage: `url(${cover})`, backgroundSize: "cover", backgroundPosition: "center", position: "relative", marginTop: '-15px' }}>
//         <Avatar src={profilepic} sx={{ width: 150, height: 150, border: "5px solid white", position: "absolute", bottom: "-75px", left: "20%", transform: "translateX(-50%)" }} />
//         {/* Plus icon */}
//         <IconButton 
//                     sx={{
//                         position: "fixed", // Make the position fixed
//                         top: "85%", // Set the distance from the top of the screen
//                         right: "5%",
//                         backgroundColor: "black",
//                         borderRadius: "50%",
//                         padding: 1,
//                         zIndex: 10, // Ensure the icon stays above other content
//                         "&:hover": { backgroundColor: "#333" }
//                       }}
            
//         >
//           <Add sx={{ color: "white", fontSize: 30 }} />
//         </IconButton>
//       </Box>

//       <Box sx={{ width: "100%", display: "flex", justifyContent: "flex-end" }}>
//         <Button variant="contained" sx={{ borderRadius: '20px', marginTop: 2, width: "260px", backgroundColor: "white", color: "black", border: "1px solid gray", "&:hover": { backgroundColor: "white", borderColor: "black" }}} onClick={handleEditProfile}>
//           Edit Profile
//         </Button>
//       </Box>

//       <Box sx={{ marginTop: 5, display: "flex", flexDirection: "column", alignItems: "left", textAlign: "left" }}>
//         <Typography variant="h4" sx={{ fontWeight: '700' }}>{name}</Typography>
//         <Typography variant="body1" sx={{ marginTop: 2, color: "gray" }}>{bio}</Typography>
//       </Box>

//       <Box sx={{ width: "100%", marginTop: 5 }}>
//         <Typography variant="h5" sx={{ fontWeight: 700, marginBottom: 3 }}>My Posts</Typography>
//         <Box sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
//           {[img1, img2, img3].map((img, index) => (
//             <Card key={index} sx={{ width: "48%", height: "300px", position: "relative", overflow: "hidden", marginBottom: 2, display: "flex", flexDirection: "column", borderRadius: '15px' }}>
//               <CardMedia component="img" height="100%" image={img} alt={`Post image ${index + 1}`} sx={{ objectFit: "cover", height: "100%" }} />
//               <CardContent sx={{ position: "absolute", bottom: -15, left: 10, zIndex: 1, padding: 0 }}>
//                 <Typography variant="body2" color="white" sx={{ fontWeight: 700 }}>Post Title {index + 1}</Typography>
//                 <Box sx={{ display: "flex", alignItems: "center", marginTop: 1, marginLeft: '-10px' }}>
//                   <IconButton sx={{ color: "white", marginRight: 0 }}>
//                     <Favorite color="error" />
//                   </IconButton>
//                   <Typography variant="body2" color="white">{Math.floor(Math.random() * 1000)} Likes</Typography>
//                 </Box>
//               </CardContent>
//             </Card>
//           ))}
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Profile;



import React, { useContext, useState } from "react";
import { Button, Box, Typography, Avatar, Card, CardContent, CardMedia, IconButton } from "@mui/material";
import { Favorite, Add } from "@mui/icons-material"; 
import { useNavigate } from "react-router-dom";
import cover from "../assets/cover.svg"; 
import profilepic from "../assets/profilepic.svg"; 
import img1 from "../assets/img1.svg"; 
import img2 from "../assets/img2.svg"; 
import img3 from "../assets/img3.svg"; 
import { ProfileContext } from "../context/ProfileContext"; 
import Header from "./Header.js"; 

const Profile = () => {
  const navigate = useNavigate();  
  const { name, bio } = useContext(ProfileContext); 
  const [selectedImage, setSelectedImage] = useState(null); // Track the selected image

  const handleEditProfile = () => {
    navigate("/edit-profile");  
  };

  const handleOpenGallery = () => {
    navigate("/gallery", { state: { selectedImage } });  // Pass the selected image to the gallery page
  };

  return (
    <Box sx={{ width: "100%", height: "auto", display: "flex", flexDirection: "column", alignItems: "center", padding: 2, backgroundColor: "#f5f5f5", overflow: "auto" }}>
        <Header pageName="Profile" />
      <Box sx={{ width: "110%", height: "200px", backgroundImage: `url(${cover})`, backgroundSize: "cover", backgroundPosition: "center", position: "relative", marginTop: '-15px' }}>
        <Avatar src={profilepic} sx={{ width: 150, height: 150, border: "5px solid white", position: "absolute", bottom: "-75px", left: "20%", transform: "translateX(-50%)" }} />
        <IconButton 
          sx={{
            position: "fixed",
            top: "85%",
            right: "5%",
            backgroundColor: "black",
            borderRadius: "50%",
            padding: 1,
            zIndex: 10,
            "&:hover": { backgroundColor: "#333" }
          }}
          onClick={handleOpenGallery}  // Trigger gallery page open
        >
          <Add sx={{ color: "white", fontSize: 30 }} />
        </IconButton>
      </Box>

      <Box sx={{ width: "100%", display: "flex", justifyContent: "flex-end" }}>
        <Button variant="contained" sx={{ borderRadius: '20px', marginTop: 2, width: "260px", backgroundColor: "white", color: "black", border: "1px solid gray", "&:hover": { backgroundColor: "white", borderColor: "black" }}} onClick={handleEditProfile}>
          Edit Profile
        </Button>
      </Box>

      <Box sx={{ marginTop: 5, display: "flex", flexDirection: "column", alignItems: "left", textAlign: "left" }}>
        <Typography variant="h4" sx={{ fontWeight: '700' }}>{name}</Typography>
        <Typography variant="body1" sx={{ marginTop: 2, color: "gray" }}>{bio}</Typography>
      </Box>

      <Box sx={{ width: "100%", marginTop: 5 }}>
        <Typography variant="h5" sx={{ fontWeight: 700, marginBottom: 3 }}>My Posts</Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
          {[img1, img2, img3].map((img, index) => (
            <Card key={index} sx={{ width: "48%", height: "300px", position: "relative", overflow: "hidden", marginBottom: 2, display: "flex", flexDirection: "column", borderRadius: '15px' }} onClick={() => setSelectedImage(img)}>
              <CardMedia component="img" height="100%" image={img} alt={`Post image ${index + 1}`} sx={{ objectFit: "cover", height: "100%" }} />
              <CardContent sx={{ position: "absolute", bottom: -15, left: 10, zIndex: 1, padding: 0 }}>
                <Typography variant="body2" color="white" sx={{ fontWeight: 700 }}>Post Title {index + 1}</Typography>
                <Box sx={{ display: "flex", alignItems: "center", marginTop: 1, marginLeft: '-10px' }}>
                  <IconButton sx={{ color: "white", marginRight: 0 }}>
                    <Favorite color="error" />
                  </IconButton>
                  <Typography variant="body2" color="white">{Math.floor(Math.random() * 1000)} Likes</Typography>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
