// route to get logged in user's info (needs the token)
export const getExerciseByDate = (date) => {
    return fetch(`/api/exercises/date/${date}`, {
      headers: {
        'Content-Type': 'application/json',
    
      },
    });
  };
