import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Calendar from 'react-calendar';
import { useNavigate } from 'react-router-dom';
import Auth from '../Utils/auth';
import Box from '@mui/material/Box'; // allows spacing at the top 
import 'react-calendar/dist/Calendar.css';
import { getExerciseByUser } from '../Utils/API';




const Home = () => {
  const navigate = useNavigate();
  const username = Auth.getLoggedInUser();
  const userId = Auth.getProfile().data._id;
  console.log(userId)

  const [workouts, setWorkouts] = useState([]);

  // const [value, setValue] = useState(new Date());
  // console.log(value);

  useEffect(() => {
    const getUser = () => {
      // Fetch workout data from the server
      fetch(`/api/exercises/user/${userId}`)
        .then(response => response.json())
        .then(data => {
          // Set the fetched workout data in state
          console.log(data)
          setWorkouts(data);
        })
        .catch(error => {
          console.error(error);
        });
    }
    getUser()
  }, []);

  const handleDateChange = (e) => {
    const date = new Date(e)
    console.log("VALUE IN HOME", e);
    navigate(`/calendarworkouts/${date}`);
  };

  const handleCalDate = ({date, view}) => {
    console.log("date", date);
    // console.log("view", view);
    if (view === "month") {
      console.log(date.toLocaleDateString('zh-Hans-CN'))
      workouts.forEach(workout => {
        console.log(workout.date)
        if (date.toLocaleDateString('zh-Hans-CN') === workout.date) {
          return "wednesday";
        }
      })
      // if (date.getDay() === 0 || date.getDay() === 6) {
      //   return "weekend";
      // }
    }
  };

  return (
    <Container className="home">
      <Box sx={{ flexGrow: 1 }} mt={4} />
      <h2>Welcome, {username}!</h2>
      <p>Click on a day to get started</p>
      
      <Box sx={{ flexGrow: 1 }} mt={6} />
      <Calendar tileClassName={handleCalDate} onClickDay={(e) => handleDateChange(e)} />
    </Container>
  );
};

export default Home;