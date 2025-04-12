import React from 'react'
import { Box, Divider, Typography } from '@mui/material'

function AboutMe() {
  return (
    <Box id='about' sx={{padding: '16px'}}>
        <Typography variant='h5' pb={2} sx={{fontWeight:500, textAlign:'center'}}>
            <Divider>About Me</Divider>
            </Typography>

        <Typography variant='body1' sx={{textAlign:'start'}}>
          I am a Frontend Developer with a passion for web development. I am proficient in front-end technologies. I have experience in developing web applications using React, Next.js, TypeScript. I am always eager to learn new technologies and improve my skills. I am a quick learner and a team player. I am looking for an opportunity to work in a challenging environment where I can utilize my skills and grow as a developer.
        </Typography>
    </Box>
  )
}

export default AboutMe