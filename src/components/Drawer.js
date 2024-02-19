import React from 'react';
import { Drawer, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';

const FixedDrawer = () => {
  const openLinkInNewTab = (url) => {
    window.open(url, '_blank');
  };
  
  return (
    <div style={{ display: 'flex',backgroundColor: 'black' }}>
      {/* Drawer component */}
      <Drawer
        variant="permanent"
        sx={{
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
            backgroundColor: 'grey'
            
          },
        }}
      >
        {/* Drawer content */}
   
          <ListItem button>
            <ListItemIcon>
              {/* Replace appropriate icon for Social */}
              <TwitterIcon />
            </ListItemIcon>
            <ListItemText primary="Social" />
          </ListItem>
          {/* Nested List for individual social media links */}
          <List>
          <ListItem button onClick={() => openLinkInNewTab('https://www.instagram.com/_lucifer_7302/')}>
            <ListItemIcon>
              <InstagramIcon />
            </ListItemIcon>
            <ListItemText primary="Instagram" />
          </ListItem>
          <ListItem button onClick={() => openLinkInNewTab('https://www.facebook.com/swajeet.chavan.1/')}>
            <ListItemIcon>
              <FacebookIcon />
            </ListItemIcon>
            <ListItemText primary="Facebook" />
          </ListItem>
          <ListItem button onClick={() => openLinkInNewTab('https://github.com/swajeet732')}>
            <ListItemIcon>
              <GitHubIcon />
            </ListItemIcon>
            <ListItemText primary="GitHub" />
          </ListItem>
          <ListItem button onClick={() => openLinkInNewTab('https://in.linkedin.com/in/swajeet-chavan-b72a01226')}>
            <ListItemIcon>
              <LinkedInIcon />
            </ListItemIcon>
            <ListItemText primary="LinkedIn" />
          </ListItem>
          <ListItem button onClick={() => openLinkInNewTab('https://x.com/c_swajeett?t=kVdx5UMQMPqxJCJEqWodaA&s=09')}>
            <ListItemIcon>
              <TwitterIcon />
            </ListItemIcon>
            <ListItemText primary="Twitter" />
          </ListItem>
          <ListItem button onClick={() => openLinkInNewTab('https://x.com/c_swajeett?t=kVdx5UMQMPqxJCJEqWodaA&s=09')}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          {/* Add more list items as needed */}
        </List>
      </Drawer>

      {/* Main content */}
      <div style={{ flexGrow: 1, padding: '20px' }}>
        {/* Your main content goes here */}
      </div>
    </div>
  );
};

export default FixedDrawer;
