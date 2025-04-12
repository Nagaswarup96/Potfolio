import React from 'react';
import { Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import './styles.css';
import Grid from '@mui/material/Grid2';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function ProfileHeader() {
  return (
    <>
      <AppBar position='static'
        sx={{ boxShadow:'none', backgroundColor: 'inherit', color: '#323232', padding: '16px' }}
      >
        <Grid container spacing={6}>
          <Grid item size={8}>
            <Typography variant='h3' className={'header'} sx={{ display: 'inline-block', fontWeight:500, fontStyle :'italic' }}>Nagaswarup<span></span></Typography>
          </Grid>
          <Grid item size={4}>
            <Grid container sx={{height:'100%', width:'100%'}} alignContent={'center'} textAlign={'center'}>
              <Grid item size={4} className={'linkItem'}><AnchorLink href='#about' className={'navLink'} underline="none">About</AnchorLink></Grid>
              <Grid item size={4} className={'linkItem'}><AnchorLink href='#tech' className={'navLink'} underline="none">Tech Stack</AnchorLink></Grid>
              <Grid item size={4} className={'linkItem'}><AnchorLink href='#project' className={'navLink'} underline="none">Projects</AnchorLink></Grid>
            </Grid>
          </Grid>
        </Grid>
      </AppBar>
    </>
  )
}

export default ProfileHeader