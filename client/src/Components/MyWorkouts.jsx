import React, { useEffect, useState } from 'react';
import  { CardContent, Typography,Card, Divider, } from '@mui/material';
import { getExerciseByDate } from '../Utils/API';
import Auth from '../Utils/auth';
import Box from '@mui/material/Box';
import Buttton from '@mui/material/Button';

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
    <div style={{ display: 'grid', alignContent: 'center', justifyContent: 'center' }}>
    <Box sx={{ flexGrow: 1 }} mt={4} />
      <h1>My Workouts</h1>
      </div>
      <Box sx={{ flexGrow: 1 }} mt={4} />
    {console.log(workouts)}
      {/* Display the workout data */}
      {workouts.map(workout => (
        <>
        <Card key={workout.id} sx={{ maxWidth: 500, margin: 'auto', mt: 2, mb: 2}}>
        
          <CardContent>
            <Typography variant='h4' gutterBottom>Type: {workout.title}</Typography>
            <Typography variant='h6'>Date: {workout.date}</Typography>
            <Typography  variant='h6'>Rep: {workout.reps}</Typography>
            <Typography  variant='h6'>Set: {workout.sets}</Typography>
            <Typography  variant='h6'>Weight: {workout.weight}</Typography>
            <Buttton variant='contained' color='primary'>Edit</Buttton>
            <Buttton variant='contained' color='primary'>Delete</Buttton>



            {/* Add additional workout details here */}
  
          </CardContent>
        </Card>
        <Box sx={{ flexGrow: 1 }} mt={2} />
                <Divider variant='middle'/>
        </>
      ))}
    </>
  );
};

export default MyWorkouts;