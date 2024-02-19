import React from 'react';
import FixedDrawer from './components/Drawer';
import Home from './components/Home';
import Profile from './components/Profile';
import AboutMe from './components/Aboutme';
import Cards1 from './components/cards1';
//import Cards2 from './components/cards2';
import './App.css'; 

const App = () => {
  return (
    <div style={{ backgroundColor : 'black'}}>
    <div >
      <h1>Your App</h1>
      <FixedDrawer />
      <div style={{ height: '190vh',  marginLeft: '240px', backgroundColor : 'black'}}>
        {/* Profile Component */}
        <Profile />
        <Home />

        {/* AboutMe Component */}
        <AboutMe />

        {/* Cards1 Component */}
        <Cards1 />

        {/* Cards2 Component */}
        {/* <div style={{ marginTop: '200px' }}>
          <Cards2 />
        </div> */}
      </div>
    </div>
    </div>
  );
};

export default App;
