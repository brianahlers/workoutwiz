import React, { useState } from 'react';
import '../index.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { useNavigate } from "react-router-dom";
import Auth from '../Utils/auth';
import Grid from '@mui/material/Grid'; // puts the login and new user in 2 grids side by side
import Box from '@mui/material/Box'; // allows spacing at the top of the 2 grids
import Button from '@mui/material/Button'; // button styling
import LoginIcon from '@mui/icons-material/Login'; // login icon
import Typography from '@mui/material/Typography'; // typography styling



const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userNameSignup, setuserNameSignup] = useState('');
  const [passwordSignup, setPasswordSignup] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  const handleLogin = () => {
    // Create an object with the username and password
    const loginData = {
      username,
      password
    };

    // Send a POST request to the server
    // this endpoint is likely not correct on line 16
    fetch('/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginData)
    })
      .then(response => {
        // Check if the response comes back as OK
        if (response.ok) {
          // If so, redirect to the home page
          return response.json();
        } else {
          // If an error occurs, show an alert message
          console.log(response)
          alert('Incorrect username or password!');
        }
      })
      .then(data => {
        // Handle the response from the server
        console.log(data);
        Auth.login(data.token)
        // Connects username to local storage to display on home page
        Auth.setLoggedInUser(username)
        navigate("/home");
      })
      .catch(error => {
        // Handle any errors that occurred during the request
        console.error(error);
      });
  };
  const handleSignup = () => {
    // Create an object with the username and password
    const loginData = {
      username: userNameSignup,
      password: passwordSignup,
      email: email
    };

    // Send a POST request to the server
    // this endpoint is likely not correct on line 16
    fetch('/api/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginData)
    })
      .then(response => {
        // Check if the response comes back as OK
        if (response.ok) {
          // If so, redirect to the home page
          return response.json();
        } else {
          // If an error occurs, show an alert message
          console.log(response)
          alert('Incorrect username or password!');
        }
      })
      .then(data => {
        // Handle the response from the server
        console.log("RESPONSE DATA HERE",data);
        Auth.login(data.token)

      })
      .catch(error => {
        // Handle any errors that occurred during the request
        console.error(error);
      });
  };

  return (
    <div className='background-image'>
    <Container >
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography variant="h4" >Login</Typography>
          <form>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
            <Box sx={{ flexGrow: 1 }} mt={2} />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <Box sx={{ flexGrow: 1 }} mt={2} />
            <Button startIcon={<LoginIcon />} variant="contained" color="primary" type="button" onClick={handleLogin}  
            sx={{
              borderRadius: '20px',
              padding: '10px 20px',
              fontSize: '1.2rem',
            }} >
              Login
            </Button>
          </form>
        </Grid>

        <Grid item sx={6}>
          <Typography variant="h4">Sign Up</Typography>
          <form>
            <input
              type="text"
              placeholder="Username"
              value={userNameSignup}
              onChange={(event) => setuserNameSignup(event.target.value)}
            />
            <Box sx={{ flexGrow: 1 }} mt={2} />
            <input
              type="email"
              placeholder="email address"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <Box sx={{ flexGrow: 1 }} mt={2} />
            <input
              type="password"
              placeholder="Password"
              value={passwordSignup}
              onChange={(event) => setPasswordSignup(event.target.value)}
            />
            <Box mt={2} />
            <Button variant="contained" color="primary" type="button" onClick={handleSignup} 
            sx={{
              borderRadius: '20px',
              padding: '10px 20px',
              fontSize: '1.2rem',
            }}>
              Sign Up
            </Button>
          </form>
        </Grid>
      </Grid>
    </Container>
    </div>
  );
};

export default Login;