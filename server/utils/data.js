const users = [
    {
        username: 'Marshmallow White',
        email: 'marshmallow1@gmail.com',
        password: 'password',
    },
    {
        username: 'oliver young',
        email: 'oly@yahoo.com',
        password: 'testpassword@1',
    },
    {
        username: 'North West',
        email: 'norhty@gmail.com',
        password: 'testpassword@2',
    }
];

const exercises = [
   { title: 'Bench Press',
    date: '2021-08-21',
    sets: 3,
    reps: 8,
    weight: 185,
    rpe: 7,
    bodyweight: 175,
    comments: 'felt good',
    user_id: '1'
},
{ title: 'Squat',
    date: '2021-08-21',
    sets: 3,
    reps: 8,
    weight: 225,
    rpe: 7,
    bodyweight: 175,
    comments: 'felt tired',
    user_id: '2'
},
{
    title: 'Deadlift',
    date: '2021-08-21',
    sets: 3,
    reps: 8,
    weight: 275,
    rpe: 9,
    bodyweight: 130,
    comments: 'felt strong',
    user_id: '3'
    
}
];



function connectExercisesToUsers(users, exercises) {
    const connectedData = [];

    for (let user of users) {
        let userData = { ...user };
        userData.exercises = exercises.filter(exercise => exercise.user_id === user.id);
        connectedData.push(userData);
    }

    return connectedData;
}

let connectedData = connectExercisesToUsers(users, exercises);
console.log(connectedData);

module.exports = { users, exercises, connectExercisesToUsers };