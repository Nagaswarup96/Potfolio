import { Box,  Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Grid from "@mui/material/Grid2";
import AboutMe from "./Pages/AboutMe";

function ProfileContent() {
  
  return (
    <Box p={8}>
      <Grid
        container
        pb={6}
        sx={{
          width: "100%",
        }}
      >
        <Grid item size={6} alignContent={"center"} justifyItems={"center"}>
          
            
          <Typography variant="h4" sx={{fontWeight:500}}>Let's Start</Typography>
          <Typography variant="h6">
            Web Developer <FontAwesomeIcon icon={faCode} />. Frontend Developer{" "}
            <FontAwesomeIcon icon={faCode} />.
          </Typography>
         
        </Grid>
        <Grid item size={6} justifyItems={"center"}>
         
          <Box height={400} width={400}>
            <img
              src="images/E0997E15-A188-4DE0-AA3B-ABD0A68385F9_1_201_a.jpeg"
              alt="profile"
              style={{ borderRadius: "50%", height: "100%", width: "100%" }}
            />
          </Box>
          
        </Grid>
      </Grid>
      <AboutMe />
    </Box>
  );
}

export default ProfileContent;
