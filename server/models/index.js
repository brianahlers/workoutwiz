// const User = require('./User');
// const Exercise = require('./Exercise');

// User.hasMany(Exercise, {
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE' //this means if a user is deleted, all of their exercises will be deleted as well
// });

// Exercise.belongsTo(User, {
//     foreignKey: 'user_id'
// });

// module.exports = { User, Exercise };

const User = require('./User');
const Exercise = require('./Exercise');


module.exports = { User, Exercise};