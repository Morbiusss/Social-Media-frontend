import React, { useState, useEffect } from "react";
import { Typography, Box, Avatar, Card, CardContent, CircularProgress, Button,TextField,InputAdornment } from "@mui/material";
import { styled } from "@mui/system";
import profilepic from "../assets/profilepic.svg";
import { Favorite } from "@mui/icons-material";
import sharelogo from "../assets/navigation-2.svg"; // Imported share logo
import img1 from "../assets/img1.svg";
import img2 from "../assets/img2.svg";
import img3 from "../assets/img3.svg";
import { Dialog, DialogTitle, DialogContent, Grid, IconButton } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import RedditIcon from '@mui/icons-material/Reddit';
import { ReactComponent as DiscordIcon } from '../assets/discord.svg';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import MessengerIcon from '@mui/icons-material/Chat';

const logos = [
  { icon: <TwitterIcon sx={{ color: "#1DA1F2" }} />, label: "Twitter" },
  { icon: <FacebookIcon sx={{ color: "#1877F2" }} />, label: "Facebook" },
  { icon: <RedditIcon sx={{ color: "#FF4500" }} />, label: "Reddit" },
  { icon: <DiscordIcon sx={{ color: "#5865F2" }} />, label: "Discord" },
  { icon: <WhatsAppIcon sx={{ color: "#25D366" }} />, label: "WhatsApp" },
  { icon: <MessengerIcon sx={{ color: "#0078FF" }} />, label: "Messenger" },
  { icon: <TelegramIcon sx={{ color: "#0088CC" }} />, label: "Telegram" },
  { icon: <InstagramIcon sx={{ color: "#E4405F" }} />, label: "Instagram"}
]


// Helper function to randomly choose one of the two colors
const generateRandomColor = () => {
  const colors = [
    "rgba(247, 235, 255, 1)", // First color
    "rgba(255, 250, 238, 1)", // Second color
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

// Styled components
const ProfileSection = styled(Box)({
  position: "absolute",
  top: "16px",
  left: "16px", // Align to the left instead of right
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start", // Align content to the start (left)
});

const ProfileText = styled(Box)({
  marginLeft: "8px",
  fontFamily: "Kubh Sans, sans-serif",
  fontWeight: "600", // Semi-Bold
});

const FeedContainer = styled(Box)({
  marginTop: "80px", // Push down to avoid overlap with profile section
  padding: "16px",
  overflow: "auto",
  maxHeight: "calc(100vh - 100px)", // Keep space for profile section
  width: '100%',
});

const FeedCard = styled(Card)(({ theme }) => ({
    borderRadius: "16px",
    marginBottom: "16px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    backgroundColor: generateRandomColor(), // Apply random background color
    position: "relative", // Keep card flexible
    paddingBottom: "50px", // Ensure space for buttons at the bottom
  }));

  const ButtonContainer = styled(Box)(() => ({
    position: "absolute",
    bottom: "8px",
    width: "100%",
    display: "flex",
    justifyContent: "space-between", // Space out the buttons
    padding: "0 8px", // Some padding for spacing
  }));
  
const Loader = styled(Box)({
  display: "flex",
  justifyContent: "center",
  marginTop: "20px",
});

// Styled components for Feed item
const FeedHeader = styled(Box)({
  display: "flex",
  alignItems: "center",
  marginBottom: "8px",
});

const FeedDetails = styled(Box)({
  marginLeft: "8px",
  display: "flex",
  flexDirection: "column",
});

const FeedContent = styled(Box)({
  marginTop: "8px",
  marginBottom: "8px",
});

// Function to format relative time (e.g., "1 day ago", "4 hrs ago")
const formatRelativeTime = (timestamp) => {
  const currentTime = new Date();
  const timeDiff = Math.floor((currentTime - new Date(timestamp)) / 1000); // in seconds
  if (timeDiff < 60) return `${timeDiff} seconds ago`;
  const minutes = Math.floor(timeDiff / 60);
  if (minutes < 60) return `${minutes} min ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} hrs ago`;
  const days = Math.floor(hours / 24);
  return `${days} day${days > 1 ? "s" : ""} ago`;
};

const Home = () => {
  const [feedData, setFeedData] = useState([]);
  const [loading, setLoading] = useState(false);

  const staticData = [
    { name: "User 1", timestamp: new Date(Date.now() - 1000 * 60 * 60).toISOString(), content: "Taking a moment to slow down, breathe, and focus on myself. 🌿✨ Self-care isn’t selfish – it’s necessary. 💕 #SelfCare #MeTime #Wellness", image: img1 },
    { name: "User 2", timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), content: "Taking a moment to slow down, breathe, and focus on myself. 🌿✨ Self-care isn’t selfish – it’s necessary. 💕 #SelfCare #MeTime #Wellness", image: img2 },
    { name: "User 3", timestamp: new Date(Date.now() - 1000 * 60 * 60 * 3).toISOString(), content: "Feed item 3", image: img3 },
    { name: "User 4", timestamp: new Date(Date.now() - 1000 * 60 * 60 * 4).toISOString(), content: "Feed item 4", image: img1 },
    { name: "User 5", timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(), content: "Feed item 5", image: img2 },
];
  // Simulate fetching feed data (same static data repeatedly)
  const fetchFeedData = () => {
    setLoading(true);
    setTimeout(() => {
      setFeedData((prevData) => [
        ...prevData,
        ...staticData,
      ]);
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    fetchFeedData();
  }, []);

  const handleScroll = (event) => {
    const bottom =
      event.target.scrollHeight === event.target.scrollTop + event.target.clientHeight;
    if (bottom && !loading) {
      fetchFeedData();
    }
  };

  const [likedItems, setLikedItems] = useState([]);

  const handleLikeClick = (index) => {
    const newLikedItems = [...likedItems];
    const isLiked = newLikedItems[index];

    // Toggle like state
    newLikedItems[index] = !isLiked;

    setLikedItems(newLikedItems);
  };

  const [openDialog, setOpenDialog] = useState(false);

const handleDialogOpen = () => setOpenDialog(true);
const handleDialogClose = () => setOpenDialog(false);


  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      padding="16px"
      position="relative"
    >
      {/* Profile Section */}
      <ProfileSection>
        <Avatar
          alt="User"
          src={profilepic} // Replace with the path to the user's profile image
          sx={{ width: 50, height: 50 }}
        />
        <ProfileText>
          <Typography
            variant="body2"
            sx={{ fontSize: "14px", color: "gray" }}
          >
            Welcome back
          </Typography>
          <Typography
            variant="h6"
            sx={{ fontFamily: "Kubh Sans, sans-serif", fontWeight: "600" }}
          >
            User Name
          </Typography>
        </ProfileText>
      </ProfileSection>

      {/* Feed Section */}
      <FeedContainer onScroll={handleScroll}>
        <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: "16px" }}>
          Feeds
        </Typography>
        {feedData.map((item, index) => (
          <FeedCard key={index}>
            <CardContent>
              {/* Feed Item Header */}
              <FeedHeader>
                <Avatar
                  alt={item.name}
                  src={profilepic} // Replace with actual user logo if applicable
                  sx={{ width: 40, height: 40 }}
                />
                <FeedDetails>
                  <Typography variant="body2" sx={{ fontWeight: "600" }}>
                    {item.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "gray", display: "flex", alignItems: "center" }}
                  >
                    {formatRelativeTime(item.timestamp)}
                  </Typography>
                </FeedDetails>
              </FeedHeader>

              {/* Feed Item Content */}
              <FeedContent>
                <Typography variant="body1">{item.content}</Typography>
                {item.image && (
                  <img
                    src={item.image}
                    alt="Feed content"
                    style={{ marginTop: "8px", maxWidth: "110%" }}
                  />
                )}
              </FeedContent>
            </CardContent>

            {/* Button Container with Share and Like Buttons */}
            <ButtonContainer>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <IconButton
                  sx={{
                    backgroundColor: "rgba(255, 255, 255, 0.7)",
                    borderRadius: "50%",
                    padding: "6px",
                  }}
                  onClick={() => handleLikeClick(index)}
                >
                  <Favorite sx={{ color: likedItems[index] ? "red" : "gray" }} />
                </IconButton>
                <Typography variant="body2" sx={{ marginLeft: "8px", color: likedItems[index] ? "red" : "gray" }}>
                  {likedItems[index] ? 1 : 0}
                </Typography>
              </Box>

              <Button
  sx={{
    backgroundColor: "rgba(0, 0, 0, 0.07)",
    borderRadius: "16px",
    padding: "8px 16px",
    fontWeight: "600",
    fontSize: "14px",
    color: "gray",
    display: "flex",
    alignItems: "center",
    boxShadow: "none",
    marginRight: "10px",
  }}
  onClick={handleDialogOpen}
>
  <img
    src={sharelogo}
    alt="Share"
    style={{ width: "16px", height: "16px", marginRight: "8px" }}
  />
  Share
</Button>

            </ButtonContainer>
          </FeedCard>
        ))}
        {loading && (
          <Loader>
            <CircularProgress />
          </Loader>
        )}
      </FeedContainer>
      <Dialog
  open={openDialog}
  onClose={handleDialogClose}
  maxWidth="sm"
  fullWidth
  PaperProps={{
    sx: {
      borderRadius: "12px", // Add border radius to the dialog box using PaperProps
    },
  }}
>
  <DialogTitle
    sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "16px",
    }}
  >
    <Typography variant="h6" sx={{ fontWeight: "1000" }}>
      Share Post
    </Typography>
    <IconButton
      onClick={handleDialogClose}
      sx={{
        backgroundColor: "rgba(200, 200, 200, 1)", // Grey background
        borderRadius: "50%", // Round shape
        width: "22px", // Set width smaller than the cross icon
        height: "22px", // Set height smaller than the cross icon
        padding: "4px", // Adjust padding to fit the icon properly
      }}
    >
      <CloseIcon sx={{ width: "18px", height: "18px" }} /> {/* Adjust the icon size */}
    </IconButton>
  </DialogTitle>
  <DialogContent sx={{ padding: "25px" }}>
    <Grid container spacing={2}>
      {logos.map((logo, index) => (
        <Grid item xs={3} key={index} sx={{ textAlign: "center" }}>
          <Avatar
            sx={{
              width: "50px",
              height: "50px",
              backgroundColor: "rgba(233, 246, 251, 1)", // Light color background
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {logo.icon}
          </Avatar>
          <Typography variant="body2" sx={{ marginTop: "8px", marginLeft: "-25px" }}>
            {logo.label}
          </Typography>
        </Grid>
      ))}
    </Grid>
    <Typography
      variant="subtitle1"
      sx={{ fontWeight: "600", marginTop: "16px" }}
    >
      Page Link
    </Typography>
    <TextField
      fullWidth
      variant="outlined"
      value="https://example.com/page"
      InputProps={{
        readOnly: true,
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              onClick={() =>
                navigator.clipboard.writeText("https://example.com/page")
              }
            >
              <ContentCopyIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
      sx={{
        marginTop: "8px",
        backgroundColor: "rgba(217, 217, 217, 1)",
        borderRadius: "12px",
        "& .MuiOutlinedInput-root": {
          borderRadius: "12px",
        },
        "& .MuiOutlinedInput-notchedOutline": {
          border: "none",
        },
      }}
    />
  </DialogContent>
</Dialog>;





    </Box>
    
  );
};

export default Home;
