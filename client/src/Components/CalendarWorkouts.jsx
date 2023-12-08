import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getExerciseByDate } from '../Utils/API';
import { get } from 'mongoose';
import { Container, Card } from 'react-bootstrap';
import Auth from '../Utils/Auth';

const CalendarWorkouts = () => {
  const [workouts, setWorkouts] = useState([]);
  const { date } = useParams();
  const userId = Auth.getProfile().data._id;

  console.log("date", date);
  const unixDate = new Date(date).toISOString().split('T')[0];
  console.log("unix date", unixDate);
  // const newDate = new Date(date)
  // const mongoDate = newDate.toISOString()
  // console.log("mongo date", mongoDate);
  useEffect(() => {
    const getWorkouts = async () => {
      const response = await getExerciseByDate(unixDate, userId);
      console.log(response);
      const data = await response.json();
      setWorkouts(data);
      console.log(data);
    };
    getWorkouts();
  }, [date]);
  return (
    <Container className="calendarWorkouts">
      <h1>CalendarWorkouts</h1>
      <h2>this is where you arrive after you click on a date on the calendar</h2>
      {workouts.map((workout) => {
        return (
          <Container key={workout._id}>
            <h3>{workout.title}</h3>
            <p>{workout.sets} sets of {workout.reps} reps at {workout.weight} lbs</p>
          </Container>
        )
      })}
    </Container>
  );
};

export default CalendarWorkouts;