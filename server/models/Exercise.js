// const sequelize = require('../config/connection');
// const { Model, DataTypes } = require('sequelize');



// class Exercise extends Model { } //this is something you have to refer to the documentation for to know what it does
//                                 //and how you are able to use the "model" and "datatypes" that sequelize gives you
// Exercise.init({
//     id: {// id
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         primaryKey: true,
//         autoIncrement: true,
//     },  
//     title: {// exercise name
//         type: DataTypes.STRING,   //this is where you define the data type for each column in the table
//         allowNull: true,
//     },
//     date: {// date
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
//     sets: {// sets
//         type: DataTypes.INTEGER,
//         allowNull: false,
//     },
//     reps: {// reps
//         type: DataTypes.INTEGER,
//         allowNull: false,
//     },
//     weight: {// weight
//         type: DataTypes.INTEGER,
//         allowNull: false,
//     },
//     rpe: {// rpe
//         type: DataTypes.INTEGER,
//         //allownull true is default
//     },
//     bodyweight: {// body weight
//         type: DataTypes.INTEGER,
//         //allownull true is default
//     },
//     comments: {// comments - ex "felt tired"
//         type: DataTypes.STRING,
//         //allownull true is default
//     },
//     user_id: {// user id foreign key to build association with the user that created the exercise or is logged in 
//         type: DataTypes.INTEGER,
//         references: {
//             model: 'user',
//             key: 'user_id',
//         },
//     },
//     },
//     {//In this second object literal youre going to define any configuration for the table and make a connection to the database
//         sequelize,
//         freezeTableName: true,
//         underscored: true,
//         modelName: 'exercise',
//     }
//     );                               

// module.exports = Exercise;

const {Schema, model} = require('mongoose');


const exerciseSchema = new Schema(
    {
        title: {
            type: String,
            required: 'You need to provide a title!',
            trim: true
        },
        date: {
            type: Date,
            required: 'You need to provide a date!',
            trim: true
        },
        sets: {
            type: Number,
            required: 'You need to provide a number of sets!',
            trim: true
        },
        reps: {
            type: Number,
            required: 'You need to provide a number of reps!',
            trim: true
        },
        weight: {
            type: Number,
            required: 'You need to provide a weight!',
            trim: true
        },
        rpe: {
            type: Number,
            trim: true
        },
        bodyweight: {
            type: Number,
            trim: true
        },
        comments: {
            type: String,
            trim: true
        },
        user_id: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    }
);

const Exercise = model('Exercise', exerciseSchema);

module.exports = Exercise;
