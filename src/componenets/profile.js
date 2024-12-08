// import React from "react";
// import { Button, Box, Typography, Avatar, Card, CardContent, CardMedia, IconButton } from "@mui/material";
// import { Favorite } from "@mui/icons-material";
// import cover from "../assets/cover.svg";  // Importing cover image
// import profilepic from "../assets/profilepic.svg";  // Importing profile picture
// import img1 from "../assets/img1.svg";  // Importing card image 1
// import img2 from "../assets/img2.svg";  // Importing card image 2
// import img3 from "../assets/img3.svg";  // Importing card image 3

// const Profile = () => {
//   return (
//     <Box
//       sx={{
//         width: "100%",
//         height: "auto",  // Change from 100vh to auto
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         padding: 2,
//         backgroundColor: "#f5f5f5",
//         overflow: "auto",  // Allow scrolling if content overflows
//       }}
//     >
//       {/* Cover Image */}
//       <Box
//         sx={{
//           width: "110%",
//           height: "200px",
//           backgroundImage: `url(${cover})`,  // Use imported cover image
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           position: "relative",
//           marginTop: '-15px',
//         }}
//       >
//         {/* Circular Frame for Profile Image */}
//         <Avatar
//           src={profilepic}  // Use imported profile picture
//           sx={{
//             width: 150,
//             height: 150,
//             border: "5px solid white",
//             position: "absolute",
//             bottom: "-75px",
//             left: "20%",
//             transform: "translateX(-50%)",
//           }}
//         />
//       </Box>

//       {/* Edit Profile Button */}
//       <Box sx={{ width: "100%", display: "flex", justifyContent: "flex-end" }}>
//         <Button
//           variant="contained"
//           sx={{
//             borderRadius: '20px',
//             marginTop: 2,
//             width: "260px", // Increase the width as needed
//             backgroundColor: "white", // Set background color to white
//             color: "black", // Set text color to black for contrast
//             border: "1px solid gray", // Add a border with a thin gray line
//             "&:hover": {
//               backgroundColor: "white", // Keep background white on hover
//               borderColor: "black", // Change border color on hover
//             },
//           }}
//           onClick={() => alert("Edit profile functionality")}
//         >
//           Edit Profile
//         </Button>
//       </Box>

//       {/* User Info */}
//       <Box
//         sx={{
//           marginTop: 5,
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "left",
//           textAlign: "left",
//         }}
//       >
//         <Typography variant="h4" sx={{fontWeight:'700'}}>Sakshi Agarwaal</Typography>
//         <Typography variant="body1" sx={{ marginTop: 2, color: "gray" }}>
//           Just someone who loves designing, sketching, and finding beauty in the little things 💕
//         </Typography>
//       </Box>

//       {/* My Posts Section */}
//       <Box
//         sx={{
//           width: "100%",
//           marginTop: 5,
//         }}
//       >
//         <Typography variant="h5" sx={{ fontWeight: 700, marginBottom: 3 }}>
//           My Posts
//         </Typography>

//         {/* Cards with Images and Like Count */}
//         <Box sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
//           {[img1, img2, img3].map((img, index) => (
//             <Card key={index} sx={{ 
//               width: "48%",  // Same width for all cards
//               height: "300px",  // Fixed height for consistency
//               position: "relative", 
//               overflow: "hidden",
//               marginBottom: 2,
//               display: "flex",
//               flexDirection: "column",
//               borderRadius:'15px'
//             }}>
//               <CardMedia
//                 component="img"
//                 height="100%"
//                 image={img}
//                 alt={`Post image ${index + 1}`}
//                 sx={{
//                   objectFit: "cover",  // Ensures the image covers the whole area of the card
//                   height: "100%", // Ensures the image takes up the full height
//                 }}
//               />
//               <CardContent sx={{ 
//                 position: "absolute", 
//                 bottom: -15, 
//                 left: 10, 
//                 zIndex: 1, 
//                 padding: 0,
//               }}>
//                 <Typography variant="body2" color="white" sx={{ fontWeight: 700 }}>
//                   Post Title {index + 1}
//                 </Typography>
//                 <Box sx={{ display: "flex", alignItems: "center", marginTop: 1, marginLeft:'-10px' }}>
//                   <IconButton sx={{ color: "white", marginRight: 0 }}>
//                     <Favorite color="error" />
//                   </IconButton>
//                   <Typography variant="body2" color="white">
//                     {Math.floor(Math.random() * 1000)} Likes {/* Random like count */}
//                   </Typography>
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


import React, { useState } from "react";
import { Button, Box, Typography, Avatar, Card, CardContent, CardMedia, IconButton } from "@mui/material";
import { Favorite } from "@mui/icons-material";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook for navigation
import cover from "../assets/cover.svg"; 
import profilepic from "../assets/profilepic.svg"; 
import img1 from "../assets/img1.svg"; 
import img2 from "../assets/img2.svg"; 
import img3 from "../assets/img3.svg"; 

const Profile = () => {
  const navigate = useNavigate();  // Initialize navigation
  const [name] = useState("Sakshi Agarwaal");
  const [bio] = useState("Just someone who loves designing, sketching, and finding beauty in the little things 💕");

  const handleEditProfile = () => {
    navigate("/edit-profile");  // Navigate to the edit profile page
  };

  return (
    <Box sx={{ width: "100%", height: "auto", display: "flex", flexDirection: "column", alignItems: "center", padding: 2, backgroundColor: "#f5f5f5", overflow: "auto" }}>
      <Box sx={{ width: "110%", height: "200px", backgroundImage: `url(${cover})`, backgroundSize: "cover", backgroundPosition: "center", position: "relative", marginTop: '-15px' }}>
        <Avatar src={profilepic} sx={{ width: 150, height: 150, border: "5px solid white", position: "absolute", bottom: "-75px", left: "20%", transform: "translateX(-50%)" }} />
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
            <Card key={index} sx={{ width: "48%", height: "300px", position: "relative", overflow: "hidden", marginBottom: 2, display: "flex", flexDirection: "column", borderRadius: '15px' }}>
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
