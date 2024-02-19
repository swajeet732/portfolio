import React from 'react';
import { Container, Typography, Card, CardContent, CardMedia, Grid } from '@mui/material';

const projectData = [
  {
    title: 'To-Do List Management System',
    description: 'A simple to-do list application to manage your tasks.',
    image: '/todo.png', // Replace with the actual path or URL to the image
  },
  {
    title: 'E-commerce Management System',
    description: 'An e-commerce platform for buying and selling products online.',
    image: '/ecommerce.jpg', // Replace with the actual path or URL to the image
  },
  {
    title: 'Student Management System',
    description: 'A system to manage student information and academic records.',
    image: '/student.png', // Replace with the actual path or URL to the image
  },
  {
    title: 'Hotel Management System',
    description: 'A comprehensive system for managing hotel operations.',
    image: '/hotel.jpg', // Replace with the actual path or URL to the image
  },
];

const skillData = [
  {
    title: 'Backend',
    description: 'Proficient in backend development using technologies such as Node.js, Express, and more.',
    skills: ['Node.js', 'JavaScript', 'Postman', 'Express.js'],
  },
  {
    title: 'Frontend',
    description: 'Experienced in building responsive and interactive user interfaces with technologies like React.js.',
    skills: ['HTML', 'CSS', 'JavaScript', 'React.js'],
  },
  {
    title: 'Database & Devops',
    description: 'Skilled in database management and design using MongoDB & Knowledgeable in DevOps practices, including version control with GitHub ',
    skills: ['MongoDB','GitHub','Aws'],
  },
 
];

const Cards1 = () => {
  return (
    <Container sx={{ textAlign: 'center', padding: 112, maxWidth: 600,  position: 'flex', marginTop:'-710px'}}>
      <Typography variant="h4">Skills</Typography>
      <Grid container spacing={2} justifyContent="center">
        {skillData.map((item, index) => (
          <Grid item key={index}>
            <Card sx={{ maxWidth: 325, padding: 2 ,backgroundColor:'aliceblue'}}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ marginTop: 1, fontWeight: 'bold' }}>
                  Skills:
                </Typography>
                <ul>
                  {item.skills.map((skill, idx) => (
                    <li key={idx}>{skill}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h4">Projects</Typography>
      <Grid container spacing={2} justifyContent="center">
        {projectData.map((project, index) => (
          <Grid item key={index}>
            <Card sx={{ maxWidth: 275, padding:-5}}>
              <CardMedia
                component="img"
                height="140"
                padding="15"
                left="-18"
                marginTop="10"
                image={project.image}
                alt={project.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Cards1;
