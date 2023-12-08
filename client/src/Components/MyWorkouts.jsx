import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
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

      {/* Display the workout data */}
      {workouts.map(workout => (
        <Card key={workout.id}>
          <Card.Body>
            <Card.Title>{workout.date}</Card.Title>
            <Card.Text>{workout.title}</Card.Text>
            <Card.Text>{workout.description}</Card.Text>
            {/* Add additional workout details here */}
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

export default MyWorkouts;