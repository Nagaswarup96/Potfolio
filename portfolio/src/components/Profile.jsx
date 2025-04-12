import React from 'react'
import { Box } from '@mui/material'
import ProfileHeader from './ProfileHeader'
import ProfileContent from './ProfileContent'
import ProfileFooter from './ProfileFooter'

function Profile() {
  return (
    <>
    <Box 
    sx={{
      color: '#323232',
      padding: '16px',
      height: '100vh',
    }}>
    <ProfileHeader/>
    <ProfileContent/>
    <ProfileFooter/>
    </Box>
    
    </>
  )
}

export default Profile