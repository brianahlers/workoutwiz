import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getExerciseByDate } from '../Utils/API';
import { get } from 'mongoose';
import { Container, Card } from 'react-bootstrap';
import Auth from '../Utils/auth';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

const CalendarWorkouts = () => {
  const [workouts, setWorkouts] = useState([]);
  const { date } = useParams();
  const userId = Auth.getProfile().data._id;

  console.log("date", date);
  const unixDate = new Date(date).toISOString().split('T')[0];
  console.log("unix date", unixDate);
  // const newDate = new Date(date)
  // const mongoDate = newDate.toISOString()
  // console.log("mongo date", mongoDate);
  useEffect(() => {
    const getWorkouts = async () => {
      const response = await getExerciseByDate(unixDate, userId);
      console.log(response);
      const data = await response.json();
      setWorkouts(data);
      console.log(data);
    };
    getWorkouts();
  }, [date]);

  return (
    
<div style={{ display: 'grid', alignContent: 'center', justifyContent: 'center' }} >
    <Container className="calendarWorkouts">
      <Box sx={{ flexGrow: 1 }} mt={4} />
      <h1> {date.split('00:00:00 GMT-0500 (Eastern Standard Time)')} </h1>
      <h1>Workouts</h1>
      {workouts.map((workout) => {
        return (
          <Box sx={{ flexGrow: 1, mt: 2}}>
          <Card key={workout._id} sx={{ maxWidth: 500, margin: 'auto', mt: 2, mb: 2 }} >
            <CardContent>
              <Typography variant='h4'>{workout.title}</Typography>
              <Typography variant='h6'>Sets: {workout.sets} </Typography>
              <Typography variant='h6'>Reps: {workout.reps}</Typography>
              <Typography variant='h6'>Weight: {workout.weight} lbs</Typography>
            </CardContent>
          </Card>
          </Box>
          

        )
      })}
       
    </Container>
   
   </div>

  );
};

export default CalendarWorkouts;