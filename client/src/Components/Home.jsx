import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Calendar from 'react-calendar';
import { useNavigate } from 'react-router-dom';
import Auth from '../Utils/auth';
import Box from '@mui/material/Box'; // allows spacing at the top 
import 'react-calendar/dist/Calendar.css';



const Home = () => {
  const navigate = useNavigate();
  const username = Auth.getLoggedInUser();

  // const [value, setValue] = useState(new Date());
  // console.log(value);

  const handleDateChange = (e) => {
    const date = new Date(e)
    console.log("VALUE IN HOME", e);
    navigate(`/calendarworkouts/${date}`);
  };

  return (
    <Container className="home">
      <Box sx={{ flexGrow: 1 }} mt={4} />
      <h2>Welcome, {username}!</h2>
      <p>Click on a day to get started</p>
      
      <Box sx={{ flexGrow: 1 }} mt={8} />
      <Calendar onClickDay={(e) => handleDateChange(e)} />
    </Container>
  );
};

export default Home;