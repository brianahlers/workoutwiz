const { User } = require('../models');
const { signToken } = require('../utils/auth');

module.exports = {
    // Get all users
    
    async getAllUsers(req, res) { console.log('hello')
        try {
            const users = await User.find()
            res.json(users)
        } catch (err) {
            res.status(500).json(err)
        }

    },

    // Get one user
    async getUserById(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.userId })
            .populate('exercises')
                .select('-__v');

            if (!user) {
                return res.status(404).json({ message: 'No user with that ID' });
            }
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // Delete a user
    async deleteUser(req, res) {
        try {
            const user = await User.findOneAndRemove({ _id: req.params.userId });
            if (!user) {
                return res.status(404).json({ message: 'No user with this ID!' });
            }
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // create a user, sign a token, and send it back (to client/src/components/SignUpForm.js)
  async createUser({ body }, res) {
    const user = await User.create(body);
    if (!user) {
      return res.status(400).json({ message: 'Something is wrong!' });
    }
    const token = signToken(user);
    res.json({ token, user });
  },
  // login a user, sign a token, and send it back (to client/src/components/LoginForm.js)
  // {body} is destructured req.body
  async login({ body }, res) {
    const user = await User.findOne({ $or: [{ username: body.username }, { email: body.email }] });
    
    if (!user) {
      return res.status(400).json({ message: "Can't find this user" });
    }

    const correctPw = await user.isCorrectPassword(body.password);

    if (!correctPw) {
      return res.status(400).json({ message: 'Wrong password!' });
    }
    const token = signToken(user);
    res.json({ token, user }).status(200);
    }, catch (error) { console.log(error)
        res.status(500).json({ message: 'An error occurred', error });
    }
    
};

