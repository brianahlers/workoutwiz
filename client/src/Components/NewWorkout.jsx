import React, { useState } from 'react';
import { addExercise } from '../Utils/API';
import exerciseList from './ExerciseList';


const NewWorkout = () => {
  const [selectedExercise, setSelectedExercise] = useState('');
  const [sets, setSets] = useState('');
  const [reps, setReps] = useState('');
  const [weight, setWeight] = useState('');
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleExerciseChange = (event) => {
    setSelectedExercise(event.target.value);
  };

  const handleSetsChange = (event) => {
    setSets(event.target.value);
  };

  const handleRepsChange = (event) => {
    setReps(event.target.value);
  };

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleAddExercise = () => {
    console.log(selectedExercise);
    console.log(sets);
    console.log(reps);
    console.log(weight);

    const exerciseData = {
      title: selectedExercise,
      sets: sets,
      reps: reps,
      weight: weight,
    };

    addExercise(exerciseData)
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

  return (
    <>
      <h1>NewWorkout</h1>
      <div className="dropdown">
        <button onClick={toggleDropdown}>Select an Exercise</button>
        {dropdownVisible && (
          <div className="dropdown-content">
            {exerciseList.map((exercise) => (
              <div
                key={exercise}
                onClick={() => {
                  setSelectedExercise(exercise);
                  setDropdownVisible(false);
                }}
              >
                {exercise}
              </div>
            ))}
          </div>
        )}
      </div>
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