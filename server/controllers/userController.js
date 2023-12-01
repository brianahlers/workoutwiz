const { User, Exercise } = require('../models');

module.exports = {
    // Get all users
    async getAllUsers(req, res) {
        try {
            const users = await User.find({});
            res.json(userData);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // Get one user
    async getUserById(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.userId })
                .select('-__v');

            if (!user) {
                return res.status(404).json({ message: 'No user with that ID' });
            }

            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // Create a user
    async createUser(req, res) {
        try {
            const user = await User.create(req.body);
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // Delete a user
    async deleteUser(req, res) {
        try {
            const user = await User.findOneAndDelete({ _id: req.params.userId });
            if (!user) {
                return res.status(404).json({ message: 'No user with this ID!' });
            }
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
};
