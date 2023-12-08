import React, { useState } from 'react';
import { addExercise } from '../Utils/API';
import exerciseList from './ExerciseList';
import Container from 'react-bootstrap/Container';
import Auth from '../Utils/Auth';


const NewWorkout = () => {
  const [selectedExercise, setSelectedExercise] = useState('');
  const [sets, setSets] = useState('');
  const [reps, setReps] = useState('');
  const [weight, setWeight] = useState('');
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const userId = Auth.getProfile().data._id;

  // useEffect(() => {
  //   const user = Auth.getProfile()
  // }, []);

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

    const currentDate = new Date();
    const dateStr = JSON.stringify(currentDate);

    const dateArr = dateStr.split('T');
    const splitDateArr = dateArr[0].split("");
    const removedQuoteArr = splitDateArr.filter((item, index) => {
      return index !== 0;
    })
    console.log(removedQuoteArr);
    const date = removedQuoteArr.join("");

    console.log(date);

    const exerciseData = {
      title: selectedExercise,
      sets: sets,
      reps: reps,
      weight: weight,
      date: date,
      user_id: userId
    };

    if (selectedExercise === '' || sets === '' || reps === '' || weight === '') {
      setSuccess(false);
      setSubmitted(true);
    } else {
      addExercise(exerciseData)
      .then((response) => {
        response.json()
        if (response.status === 200) {
          setSuccess(true);
          setSubmitted(true);
        }
      })
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
      setSets('');
      setReps('');
      setWeight('');
    }
  };

  return (
    <>
      <h1>NewWorkout</h1>
      <Container className="dropdown">
        <button onClick={toggleDropdown}>Select an Exercise</button>
        {dropdownVisible && (
          <Container className="dropdown-content">
            {exerciseList.map((exercise) => (
              <Container
                key={exercise}
                onClick={() => {
                  setSelectedExercise(exercise);
                  setDropdownVisible(false);
                }}
              >
                {exercise}
              </Container>
            ))}
          </Container>
        )}
      </Container>
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
      {success && submitted ? (
        <p>Exercise Added!</p>
      ) : !success && submitted ?  (
        <p>Please fill out all fields</p>
      ) : (
        <></>
      )}
    </>
  );
};

export default NewWorkout;