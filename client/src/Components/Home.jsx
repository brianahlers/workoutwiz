import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Calendar from 'react-calendar';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const [value, setValue] = useState(new Date());
  console.log(value);

  const handleDateChange = () => {
    console.log(value);
    navigate(`/calendarworkouts/${value}`);
  };

  return (
    <Container className="home">
      <h1>Home</h1>
      <h2>Welcome, User!</h2>
      <p>Click on a date to see what you tracked that day!</p>
      <p>pretend that there are future paid fancy features like graphs and charts here!</p>
      <Calendar onChange={setValue} value={value} onClickDay={handleDateChange} />
    </Container>
  );
};

export default Home;