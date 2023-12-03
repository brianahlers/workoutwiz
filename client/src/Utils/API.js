// route to get logged in user's info (needs the token)
export const getExerciseByDate = (date) => {
    return fetch(`/api/exercises/date/${date}`, {
      headers: {
        'Content-Type': 'application/json',
    
      },
    });
  };


export const addExercise = (exerciseData) => {
    return fetch('/api/workouts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(exerciseData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the server
        console.log('Server response:', data);
        return data; // Return the response data if needed
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        console.error('Error:', error);
        throw error; // Throw the error if needed
      });
  };