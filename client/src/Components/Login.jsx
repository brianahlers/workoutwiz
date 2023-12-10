import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { useNavigate } from "react-router-dom";
import Auth from '../Utils/auth';




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
        console.log(data);
        Auth.login(data.token)
        navigate("/home");
        
      })
      .catch(error => {
        // Handle any errors that occurred during the request
        console.error(error);
      });
  };

  return (
    <Container>
      <h1>Create User</h1>
      <form>
      <input
          type="text"
          placeholder="Username"
          value={userNameSignup}
          onChange={(event) => setuserNameSignup(event.target.value)}
        />
      <input
          type="email"
          placeholder="email address"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={passwordSignup}
          onChange={(event) => setPasswordSignup(event.target.value)}
        />
        <button type="button" onClick={handleSignup}> 
          Sign Up
        </button>
      </form>
      <h1>Login</h1>
      <form>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="button" onClick={handleLogin}> 
          Login
        </button>
      </form>
    </Container>
  );
};

export default Login;