import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';




const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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
          window.location.replace('/home');
        } else {
          // If an error occurs, show an alert message
          alert('Incorrect username or password!');
        }
      })
      .then(data => {
        // Handle the response from the server
        console.log(data);
        console.log(data.status)
        console.log(response.status)
      })
      .catch(error => {
        // Handle any errors that occurred during the request
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Create User</h1>
      
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
    </div>
  );
};

export default Login;