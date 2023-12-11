import React, { useState } from 'react';
import { addExercise } from '../Utils/API';
import exerciseList from './ExerciseList';
import Container from 'react-bootstrap/Container';
import Auth from '../Utils/auth';
import { TextField } from '@mui/material';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';




const NewWorkout = () => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
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
  console.log(selectedExercise)

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
    <div style={{display: 'grid', height: '90vh', alignContent: 'center', justifyContent: 'center'} }>
      <h1>NewWorkout</h1>
      <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton onClick={handleClick}>
          <ListItemText primary="Select an Exercise" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {exerciseList.map((exercise) => (
              <ListItemButton sx={{ pl: 4, backgroundColor: '' } }
                key={exercise}
                onClick={() => {
                  setSelectedExercise(exercise);
                  setDropdownVisible(false);
                  setOpen(!open)
                }}
              >
                <ListItemIcon>

                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary={exercise} />
              </ListItemButton>
            ))}
          </List>
        </Collapse>
      </List>
      {/* <Container className="dropdown">
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
      </Container> */}
      <h4>You selected: {selectedExercise} </h4>
      <TextField
        type="number"
        label="Sets"
        value={sets}
        onChange={handleSetsChange}
        variant="outlined"
      />
      <TextField
        type="number"
        label="Reps"
        value={reps}
        onChange={handleRepsChange}
        variant="outlined"
      />
      <TextField
        type="number"
        label="Weight"
        value={weight}
        onChange={handleWeightChange}
        variant="outlined"
      />
      <button onClick={handleAddExercise}>Add Exercise</button>
      {success && submitted ? (
        <p>Exercise Added!</p>
      ) : !success && submitted ? (
        <p>Please fill out all fields</p>
      ) : (
        <></>
      )}
      </div>
    </>
  );
};

export default NewWorkout;