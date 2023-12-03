import React, { useState } from 'react';

const NewWorkout = () => {
    const [selectedExercise, setSelectedExercise] = useState('');
    const [sets, setSets] = useState('');
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');

    const exerciseList = [
        'Barbell Squat',
        'Barbell Bench Press',
        'Barbell Deadlift',
        'Barbell Row',
        'Barbell Overhead Press',
        'Dumbbell Squat',
        'Dumbbell Bench Press',
        'Dumbbell Deadlift',
        'Dumbbell Row',
        'Dumbbell Overhead Press',
        'Pull Ups', 'Push Ups',
        'Sit Ups',
        'Plank',
        'Crunches',
        'Lunges',
        'Jumping Jacks',
        'Burpees',
        'Mountain Climbers',
        'Leg Raises',
        'Squats',
        'Calf Raises',
        'Bicep Curls',
        'Tricep Extensions',
        'Shoulder Press',
        'Lateral Raises',
        'Front Raises',
        'Skull Crushers',
        'Hammer Curls',
        'Dumbbell Flys',
        'Dumbbell Pullovers',
        'Dumbbell Kickbacks',
        'Dumbbell Shrugs',
        'Dumbbell Lateral Raises',
        'Dumbbell Front Raises',
        'Dumbbell Skull Crushers',
        'Dumbbell Hammer Curls',
        'Dumbbell Flys',
        'Dumbbell Pullovers',
        'Dumbbell Kickbacks',
        'Dumbbell Shrugs',
        'Dumbbell Lateral Raises',
        'Dumbbell Front Raises',
        'Dumbbell Skull Crushers',
        'Dumbbell Hammer Curls'
    ]

    const handleExerciseChange = (event) => {
        setSelectedExercise(event.target.value);
    }
    const handleSetsChange = (event) => {
        setSets(event.target.value);
    };
    const handleRepsChange = (event) => {
        setReps(event.target.value);
    };
    const handleWeightChange = (event) => {
        setWeight(event.target.value);
    };

    const handleAddExercise = () => {
        console.log(selectedExercise);
        console.log(sets);
        console.log(reps);
        console.log(weight);
    };

    return (
        <>
            <h1>NewWorkout</h1>
            <select onChange={handleExerciseChange}>
                <option value="">Select an Exercise</option>
                {exerciseList.map((exercise) => (
                    <option key={exercise} value={exercise}>
                        {exercise}
                    </option>
                ))}
            </select>
            <input
                type="number"
                placeholder="Sets"
                value={sets}
                onChange={handleSetsChange}
            />
            <input
                type="number"
                placeholder="Reps"
                value={reps}
                onChange={handleRepsChange}
            />
            <input
                type="number"
                placeholder="Weight"
                value={weight}
                onChange={handleWeightChange}
            />
            <button onClick={handleAddExercise}>Add Exercise</button>
        </>
    );
};
// I THINK THIS IS THE LOGIC FOR THE POST REQUEST
// fetch('https://api.example.com/workouts', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(exerciseData),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         // Handle the response from the server
//         console.log('Server response:', data);
//       })
//       .catch((error) => {
//         // Handle any errors that occur during the request
//         console.error('Error:', error);
//       });

export default NewWorkout;