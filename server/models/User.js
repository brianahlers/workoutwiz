const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const exerciseSchema = require('./Exercise');

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
        required: true,
        
    },
    exercises: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Exercise'
        }
    ],
},
{ //this code is saying to include any virtual properties when json payload is requested
    toJSON: { 
      virtuals: true,
    },
    // id: false, //this code is saying to not include the id when json payload is requested
  }
);

// hash user password
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });
  
  // custom method to compare and validate password for logging in
  userSchema.methods.isCorrectPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };
  


userSchema.virtual('exerciseCount').get(function () {
    return this.exercises.length;
  });



const User = model('User', userSchema);

module.exports = User; 


///the result of doing the "ref: exercise" is that the user model will have an array of exercise ids.
///and it will make 2 different collections in the database. 1 for users and 1 for exercises.
///the exercise collection will have an array of user ids that you will have to refernce 