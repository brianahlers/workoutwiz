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
},
{ //this code is saying to include any virtual properties when json payload is requested
    toJSON: { 
      virtuals: true,
    },
    id: false, //this code is saying to not include the id when json payload is requested
  }
);

const User = model('User', userSchema);

module.exports = User; //fixed this typo it said "model.exports"


///the result of doing the "ref: exercise" is that the user model will have an array of exercise ids.
///and it will make 2 different collections in the database. 1 for users and 1 for exercises.
///the exercise collection will have an array of user ids that you will have to refernce 