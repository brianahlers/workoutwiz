import React, { useState } from 'react';
import { addExercise } from '../Utils/API'
import exerciseList from './ExerciseList';

const NewWorkout = () => {
    const [selectedExercise, setSelectedExercise] = useState('');
    const [sets, setSets] = useState('');
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');

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
        const handleAddExercise = () => {
            const exerciseData = {
                exercise: selectedExercise,
                sets: sets,
                reps: reps,
                weight: weight,
            };

            addExercise(exerciseData)
                .then((response) => {
                    // Handle the response from the server if needed
                })
                .catch((error) => {
                    // Handle any errors that occur during the request if needed
                });
        };
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

export default NewWorkout;