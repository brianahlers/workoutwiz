const { Schema, model } = require('mongoose');


const userSchema = new Schema({
    username: {
        type: String,
        required: 'You need to provide a username!',
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: 'You need to provide an email!',
        unique: true,
        match: [/.+@.+\..+/]
    },
    password: {
        type: String,
        required: 'You need to provide a password!',
        minlength: 8
    },
    exercises: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Exercise'
        }
    ]
});

const User = model('User', userSchema);

model.exports = User;