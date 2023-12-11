import React, { useEffect, useState } from 'react';
import  { CardContent, Typography,Card, Divider, } from '@mui/material';
import { getExerciseByDate } from '../Utils/API';
import Auth from '../Utils/auth';

const MyWorkouts = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const user = Auth.getProfile()
    console.log(user.data._id)
    // Fetch workout data from the server
    fetch(`/api/exercises/user/${user.data._id}`)
      .then(response => response.json())
      .then(data => {
        // Set the fetched workout data in state
        console.log(data)
        setWorkouts(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <h1>MyWorkouts</h1>
      <h2>These are the workouts that you have tracked</h2>
    {console.log(workouts)}
      {/* Display the workout data */}
      {workouts.map(workout => (
        <>
        <Card key={workout.id}>
          <CardContent>
            <Typography variant='h4' gutterBottom>Type: {workout.title}</Typography>
            <Typography variant='h6'>Date: {workout.date}</Typography>
            <Typography  variant='h6'>Rep: {workout.reps}</Typography>
            <Typography  variant='h6'>Set: {workout.sets}</Typography>
            <Typography  variant='h6'>Weight: {workout.weight}</Typography>



            {/* Add additional workout details here */}
  
          </CardContent>
        </Card>
                <Divider variant='middle'/>
        </>
      ))}
    </>
  );
};

export default MyWorkouts;