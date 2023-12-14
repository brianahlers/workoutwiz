import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Auth from '../Utils/auth';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import logo from '../assets/workoutwizlogo.png';

const Nav = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    Auth.logout();
    navigate('/');
  };
  const loggedIn = localStorage.getItem('loggedIn');
  return (

    <AppBar position="static">
<Typography variant="h6" component="div" sx={{margin: 'auto', fontSize: '1rem'}}> <img src={logo} alt="Workout Wiz Logo" className="logo" width="350" height="250" /> </Typography>
    <Toolbar>
      {
        loggedIn ? (
          <>
            <Button color="inherit" component={RouterLink} to="/home" sx={{ mr: 3 }}>Home</Button>
            <Button color="inherit" component={RouterLink} to="/myworkouts" sx={{ mr: 3 }}>My Workouts</Button>
            <Button color="inherit" component={RouterLink} to="/newworkout" sx={{ mr: 3 }}>Add Workout</Button>
            <Button color="inherit" component={RouterLink} to="/ask" sx={{ mr: 3 }}>Ask A Certified Personal Trainer</Button>
            <Box sx={{ flexGrow: 1 }} />
            <Button color="inherit" onClick={handleLogout}>Logout</Button>
          </>
        ) : (
          <>
            <Button color="inherit" component={RouterLink} to="/">Login</Button>
          </>
        )
      }
    </Toolbar>
    
  </AppBar>

  );
};


export default Nav;