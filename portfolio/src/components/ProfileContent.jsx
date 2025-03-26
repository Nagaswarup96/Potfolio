import { Box, Typography } from '@mui/material';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCode }from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Grid from '@mui/material/Grid2';

function ProfileContent() {
  return (
    <>
    <Grid container p={8} sx={{height:'100vw', width:'100%', backgroundColor:'#DDD0C8', color:'#323232'}}>
      <Grid item size={6}>
      <Typography variant='h4'>
          Let's Start
        </Typography>
        <Typography variant='h6'>
        Web Developer <FontAwesomeIcon icon={faCode}/>. Frontend Developer <FontAwesomeIcon icon={faCode}/>.
        </Typography>
      </Grid>
      <Grid item size={6}>
        <Box>
          <Typography variant='body1'>Image</Typography>
        </Box>
      </Grid>
      <Grid item size={12} >
        <Typography variant='h6'>About Me</Typography>
      </Grid>
    </Grid>
    </>
  )
}

export default ProfileContent