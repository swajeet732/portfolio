import React from 'react';
import { Container, Typography, Paper } from '@mui/material';
import { grey } from '@mui/material/colors';

const AboutMe = () => {
  return (
    <Container
      sx={{
        marginTop: '-115px',
        textAlign: 'center',
        position: 'relative',
        left: '-1%', // Adjust the position as needed
        top: 170,
        maxwidth: '100%', // Adjust the width as needed
        zIndex: 99,
      }}
    >
       <Paper sx={{ padding: 3, backgroundColor: 'aliceblue',border : 1, borderColor : grey ,maxWidth: '100%', margin: 'auto' , boxShadow :'grey' }}>
        <Typography variant="h4" sx={{ color: 'blue' }}>
          About Me
        </Typography>
        {/* Add more content about yourself as needed */}
        <Typography sx={{ color: 'red' }}>
          "As a passionate tech enthusiast, I have successfully completed my Bachelor's of Engineering in Information Technology with a commendable cumulative grade point average of 68%. My insatiable curiosity drives me to constantly seek opportunities that allow me to broaden my knowledge and explore new concepts.

          My primary focus is on web development, and I have honed my skills through comprehensive training in the MERN stack. This training has equipped me with a solid foundation in MongoDB, Express.js, React.js, and Node.js, enabling me to design and implement robust and scalable web applications.

          Now, I am eager to transition from theoretical learning to practical application by actively seeking real-world projects. My goal is to gain hands-on experience in the industry, applying my expertise to solve challenges and contribute meaningfully to the dynamic field of technology.

          I am particularly enthusiastic about leveraging my web development skills to create innovative solutions that make a positive impact. With a strong foundation and a proactive approach, I am ready to embark on the next phase of my career journey, where I can continue to learn, grow, and make significant contributions to the tech industry."
        </Typography>
      </Paper>
    </Container>
  );
};

export default AboutMe;
