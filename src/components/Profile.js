import React from 'react';
import { Container, Typography, Grid, Avatar } from '@mui/material';

const Profile = () => {
  return (
    <Container
      sx={{
        marginTop: '-100px',
        textAlign: 'center',
        position: 'relative',
        left: '-1%',
        top: 5,
        width: '100%', // Adjust the width as needed
        zIndex: 999,
        backgroundImage: 'url(/blurr.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      
      }}
    >
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        {/* Avatar */}
        <Grid item>
          <Avatar alt="Your Name" src="hero.jpg" sx={{ width: 120, height: 120,left: -500,border : 4 ,borderColor:'white' }} />
        </Grid>

        {/* Name */}
        <Grid item>
          <Typography variant="h4" sx={{ marginLeft: -90, textDecorationColor: 'whitesmoke',color: 'whitesmoke'}}>
            Swajeet Chavan
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Profile;
