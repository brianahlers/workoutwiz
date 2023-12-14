import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Box, Divider } from '@mui/material';
import Auth from '../Utils/auth';
import { Button } from '@mui/material';

const MyWorkouts = () => {
  const [workouts, setWorkouts] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const userId = Auth.getProfile().data._id;

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        console.log(userId)
        const response = await fetch(`/api/exercises/user/${userId}`);
        const data = await response.json();
        console.log(data);
        setWorkouts(data);
        setLoaded(true);
      } catch (err) {
        console.error(err);
      }
    };

    fetchWorkouts();
  }, []);

  const handleDeleteExercise = async (workoutId) => {
    try {
      await fetch(`/api/exercises/${workoutId}`, {
        method: 'DELETE',
      });
      setWorkouts(workouts.filter((workout) => workout.id !== workoutId));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div style={{ display: 'grid', alignContent: 'center', justifyContent: 'center' }}>
        <Box sx={{ flexGrow: 1 }} mt={4} />
        <h1>My Workouts</h1>
      </div>
      <Box sx={{ flexGrow: 1 }} mt={4} />
      {console.log("workouts here", workouts)}
      <>
        {loaded ? (
          workouts.map((workout) => (
            <div key={workout.id}>
              <Card sx={{ maxWidth: 350, margin: 'auto', mt: 2, mb: 2 }}>
                <CardContent>
                  <Typography variant='h4' gutterBottom>{workout.title}</Typography>
                  <Typography variant='h6'>Date: {workout.date}</Typography>
                  <Typography variant='h6'>Rep: {workout.reps}</Typography>
                  <Typography variant='h6'>Set: {workout.sets}</Typography>
                  <Typography variant='h6'>Weight: {workout.weight}</Typography>
                  <Box sx={{ flexGrow: 1 }} mt={1} />
                  <Button style={{ backgroundColor: 'black' }} variant='contained' color='primary' onClick={() => handleDeleteExercise(workout.id)}>Delete</Button>
                  
                </CardContent>
              </Card>
              <Box sx={{ flexGrow: 1 }} mt={2} />
              <Divider variant='middle' />
            </div>
          ))
        ) : null}
      </>
    </>
  );
};

export default MyWorkouts;