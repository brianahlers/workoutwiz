// import React, { useEffect, useState } from 'react';
// import { CardContent, Typography, Card, Divider, } from '@mui/material';
// import { getExerciseByDate } from '../Utils/API';
// import Auth from '../Utils/auth';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import { deleteExercise } from '../Utils/API';

// const MyWorkouts = () => {
//   const [workouts, setWorkouts] = useState([]);
//   const [loaded, setLoaded] = useState(false);


//   const getUser = () => {
//     const user = Auth.getProfile()
//     console.log(user.data._id)
//     // Fetch workout data from the server
//     fetch(`/api/exercises/user/${user.data._id}`)
//       .then(response => response.json())
//       .then(data => {
//         // Set the fetched workout data in state
//         console.log("DATA INSIDE MYWORKOUTS",data)
//         setWorkouts(data);
//         setLoaded(true);
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   }

//   useEffect(() => {
//     const getUser = () => {
//       const user = Auth.getProfile()
//       console.log(user.data._id)
//       // Fetch workout data from the server
//       fetch(`/api/exercises/user/${user.data._id}`)
//         .then(response => response.json())
//         .then(data => {
//           // Set the fetched workout data in state
//           console.log("DATA INSIDE MYWORKOUTS",data)
//           setWorkouts(data);
//           setLoaded(true);
//         })
//         .catch(error => {
//           console.error(error);
//         });
//     }
//     getUser()
//   } );

//   const handleDeleteExercise = async (exerciseId) => {
//     console.log(exerciseId)
//     const token = Auth.loggedIn() ? Auth.getToken() : null;
//     if (!token) {
//       return false;
//     }
//     try {
//       const response = await deleteExercise(exerciseId, token);

//       if (!response.ok) {
//         throw new Error('something went wrong!');
//       }
//       getUser()
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <>
//       <div style={{ display: 'grid', alignContent: 'center', justifyContent: 'center' }}>
//         <Box sx={{ flexGrow: 1 }} mt={4} />
//         <h1>My Workouts</h1>
//       </div>
//       <Box sx={{ flexGrow: 1 }} mt={4} />
//       {console.log("workouts here", workouts)}
//       {/* Display the workout data */}
//       <>
//         {loaded ? (
//           workouts.map(workout => (
//             <>
//               <Card key={workout.id} sx={{ maxWidth: 350, margin: 'auto', mt: 2, mb: 2 }}>

//                 <CardContent>
//                   <Typography variant='h4' gutterBottom> {workout.title}</Typography>
//                   <Typography variant='h6'>Date: {workout.date}</Typography>
//                   <Typography variant='h6'>Rep: {workout.reps}</Typography>
//                   <Typography variant='h6'>Set: {workout.sets}</Typography>
//                   <Typography variant='h6'>Weight: {workout.weight}</Typography>
//                   <Box sx={{ flexGrow: 1 }} mt={1} />
//                   <Button variant='contained' color='primary' onClick={() => handleDeleteExercise(workout._id)}>Delete</Button>
//                   {/* Add additional workout details here */}
//                 </CardContent>
//               </Card>
//               <Box sx={{ flexGrow: 1 }} mt={2} />
//               <Divider variant='middle' />
//             </>
//           ))
//         ) : (
//           <></>
//         )}
//       </>


//     </>
//   );
// };

// export default MyWorkouts;

import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Button, Box, Divider } from '@mui/material';

const MyWorkouts = () => {
  const [workouts, setWorkouts] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await fetch('/api/workouts');
        const data = await response.json();
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
      await fetch(`/api/workouts/${workoutId}`, {
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
      {/* Display the workout data */}
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
                  <Button variant='contained' color='primary' onClick={() => handleDeleteExercise(workout.id)}>Delete</Button>
                  {/* Add additional workout details here */}
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