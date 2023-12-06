// route to get logged in user's info (needs the token)
export const getExerciseByDate = (date, userId) => {
    return fetch(`/api/exercises/date/${date}/${userId}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };


export const addExercise = (exerciseData) => {
    return fetch('/api/exercises', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(exerciseData),
    })
  };


