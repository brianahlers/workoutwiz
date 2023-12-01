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
