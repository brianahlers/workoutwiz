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




