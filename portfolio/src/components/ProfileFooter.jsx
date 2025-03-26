import React from 'react';
import { Typography, Box } from '@mui/material';

function ProfileFooter() {
  return (
    <>
    <Box
    sx={{bottom:0, position:'fixed',height:'50px',border:'solid 1px black', width:'100%'}}>
        <Typography>Footer</Typography>
    </Box>
    </>
  )
}

export default ProfileFooter