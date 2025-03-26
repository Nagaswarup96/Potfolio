import { Box, Typography } from '@mui/material'
import { library } from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCode }from '@fortawesome/free-solid-svg-icons'
import React from 'react'

function ProfileContent() {
  return (
    <>
    <Box sx={{height:'100vw', width:'100%', backgroundColor:'#DDD0C8', color:'#323232'}}>
        <Typography variant='h4'>
           Learn more
        </Typography>
        <Typography variant='h6'>
        Web Developer <FontAwesomeIcon icon={faCode}/>. Frontend Developer <FontAwesomeIcon icon={faCode}/>.
        </Typography>
    </Box>
    </>
  )
}

export default ProfileContent