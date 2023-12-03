require("dotenv").config({
    path: "../.env"
});
const connection = require('../config/connection');
const { User, Exercise } = require('../models'); 
const { users, exercises, connectExercisesToUsers } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');
    // Delete the collections if they exist
    let exerciseCheck = await connection.db.listCollections({ name: 'exercises' }).toArray();
    if (exerciseCheck.length) {
        await connection.dropCollection('exercises');
    }

    let usersCheck = await connection.db.listCollections({ name: 'users' }).toArray();
    if (usersCheck.length) {
        await connection.dropCollection('users');
    }


//empty arrays to push data into
    // const users = [];
    // const exercises = [];
// Function to make a exercise object and push it into the exercises array
// const makeExercise = (userId, title, date, sets, reps, weight) => {
//  const exercise = {
//         user_id: userId,
//         title,
//         date,
//         sets,
//         reps,
//         weight,
//     };
//     exercises.push(exercise);
//     return exercise;
//  };

// // Function to make a user object and push it into the users array
// const makeUser = (username, email, password) => {
//     const user = {
//         id: users.length + 1, // assuming id starts from 1 and increments for each new user
//         username,
//         email,
//         password,
//     };
//     users.push(user);
//     return user;
// };

// // Create users and an exercise for each user
// users.forEach(user => {
//     const newUser = makeUser(user.username, user.email, user.password);
//     const newExercise = makeExercise(newUser.id, 'Exercise Title', '2022-01-01', 3, 10, 50); // replace with actual exercise data
//     exercises.push(newExercise);
// });

// //checks if the user exists in the database if not it creates a new user
// users.forEach(async (user) => {
//     const existingUser = await User.findOne({ username: user.username });
//     if (!existingUser) {
//         const newUser = makeUser(user.username, user.email, user.password);
//         makeExercise(newUser.id, 'Exercise Title', '2022-01-01', 3, 10, 50); // replace with actual exercise data
//     }
// });

// Insert users and exercises into the database
await User.collection.insertMany(users);
await Exercise.collection.insertMany(exercises);

// Connect exercises to users
let connectedData = connectExercisesToUsers(users, exercises);
console.table(connectedData);

// Log out a pretty table of the users with their exercises
// console.table(connectExercisesToUsers(users, exercises));
console.info('Seeding complete! 🌱');
process.exit(0);
   
});




