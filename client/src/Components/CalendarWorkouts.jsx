import React, { useEffect } from 'react';
import { useState}  from 'react';
import { useParams } from 'react-router-dom';
import { getExerciseByDate } from '../Utils/API';
import { get } from 'mongoose';


const CalendarWorkouts = () => {
    const {date} = useParams();
    console.log(date);
    const unixDate = new Date(date).toISOString().split('T')[0];
    console.log(unixDate);
    const mongoDate = new Date(date)
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