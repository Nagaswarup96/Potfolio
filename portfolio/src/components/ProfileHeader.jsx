import React from 'react';
import { Typography, Box, Link } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import './styles.css';
import Grid from '@mui/material/Grid2'

function ProfileHeader() {
  return (
    <>
      <AppBar position='static'
        sx={{ backgroundColor: '#DDD0C8', color: '#323232', padding: '16px' }}
      >
        <Grid container spacing={4}>
          <Grid item size={8}>
            <Typography variant='h3' className={'header'} sx={{ display: 'inline-block' }}>Nagaswarup<span></span></Typography>
          </Grid>
          <Grid item size={4}>
            <Grid container spacing={1} sx={{height:'100%'}} alignContent={'end'}>
              <Grid item size={4}><Link className={'navLink'} underline="none">About</Link></Grid>
              <Grid item size={4}><Link className={'navLink'} underline="none">Tech Stack</Link></Grid>
              <Grid item size={4}><Link className={'navLink'} underline="none">Projects</Link></Grid>
            </Grid>
          </Grid>
        </Grid>
      </AppBar>
    </>
  )
}

export default ProfileHeader