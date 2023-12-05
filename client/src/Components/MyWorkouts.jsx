import React from 'react';
import Button from 'react-bootstrap/Button';

const MyWorkouts = () => {
    return (
        <>
            <h1>MyWorkouts</h1>
            <Button>click me</Button>

            {/* 
            
            in this space we need to display the workout data from the server
            we need it to display the workouts where we can sort by the date (newest/oldest)
            I think we should use cards to display the workouts
            --these things are above and beyond the requirements--
            to be able to delete the workouts
            to be able to edit the workouts
            
            */}
        </>
    );
};

export default MyWorkouts;