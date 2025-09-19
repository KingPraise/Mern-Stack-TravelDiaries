import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box width="100%" height="90vh" position={"relative"}>
      <img src="/road.jpg" alt="Road" width={"100%"} height={"70%"} />
      <Typography
        fontFamily={"Dancing Script, cursive"}
        variant="h3"
        fontWeight={"bold"}
        textAlign={"center"}
        width="100%"
        sx={{
          position: "absolute",
          top: "0px",
          color: "#111115de",
          backgroundColor: "#B2CADF",
        }}
      >
        You can do anything you set your mind to.
      </Typography>
      <Box
        width={"100%"}
        textAlign={"center"}
        mt="20px"
        height={"30%"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Typography
          textAlign={"center"}
          variant="h4"
          fontWeight={"bold"}
          fontFamily={"quicksand, sans-serif"}
          padding={4}
        >
          Welcome to Travel Diaries
        </Typography>
        <Box margin={"auto"}>
          <Button LinkComponent={Link} to="/" variant="outlined" sx={{ mr: 2 }}>
            Share Your Story
          </Button>
          <Button
            LinkComponent={Link}
            to="/diaries"
            variant="contained"
            sx={{ ml: 2 }}
          >
            View Diaries
          </Button>
        </Box>
        {/* <Typography variant="h6" fontFamily={"Dancing Script, cursive"}>
          Share your travel experiences with the world!
        </Typography> */}
      </Box>
    </Box>
  );
};

export default Home;
