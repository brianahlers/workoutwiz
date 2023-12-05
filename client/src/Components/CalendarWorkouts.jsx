import React, { useEffect } from 'react';
import { useState}  from 'react';
import { useParams } from 'react-router-dom';
import { getExerciseByDate } from '../Utils/API';


const CalendarWorkouts = () => {
    const {date} = useParams();
    console.log(date);
    const unixDate = new Date(date);
    console.log(unixDate);
    useEffect(() => {
        const getWorkouts = async () => {
            const response = await getExerciseByDate(unixDate);
            console.log(response);
            const data = await response.json();
            console.log(data);
        };
        getWorkouts();
    }, [date]);
    return (
        <div className="calendarWorkouts">
            <h1>CalendarWorkouts</h1>
            <h2>this is where you arrive after you click on a date on the calenar</h2>
        </div>
    );
};

export default CalendarWorkouts;