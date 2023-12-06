import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';

const MyWorkouts = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    // Fetch workout data from the server
    fetch('/api/workouts')
      .then(response => response.json())
      .then(data => {
        // Set the fetched workout data in state
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
        <div key={workout.id}>
          <h3>{workout.title}</h3>
          <p>{workout.description}</p>
          {/* Add additional workout details here */}
        </div>
      ))}
    </>
  );
};

export default MyWorkouts;