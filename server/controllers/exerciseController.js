const { Exercise} = require('../models');

module.exports = {
    //Get all exercises
async getAllExercises(req, res) {
    try {
        const exercises = await Exercise.find({});
        res.json(exercises);
    } catch (err) {
        res.status(500).json(err);
    }

},
//Get one exercise by id
async getExerciseById(req, res) {
    try {
        const exercise = await Exercise.findOne({ _id: req.params.exerciseId })
            .select('-__v');

        if (!exercise) {
            return res.status(404).json({ message: 'No exercise with that ID' });
        }

        res.json(exercise);
    } catch (err) {
        res.status(500).json(err);
    }
},
//Create an exercise
async createExercise(req, res) {
    try {
        const exercise = await Exercise.create(req.body);
        res.json(exercise);
    } catch (err) {
        res.status(500).json(err);
    }
},
//Update an exercise
async updateExercise(req, res) {
    try {
        const exercise = await Exercise.findOneAndUpdate(
            {_id: req.params.exerciseId},
            { $addToSet: { exercises: req.body } },
            { new: true, runValidators: true }
        );
        if (!exercise) {
            return res.status(404).json({ message: 'No exercise with this ID!' });
        }
        res.json(exercise);
    } catch (err) {
        res.status(500).json(err);
    }
},
//Delete an exercise
async deleteExercise(req, res) {
    try {
        const exercise = await Exercise.findOneAndRemove({ _id: req.params.exerciseId });
        if (!exercise) {
            return res.status(404).json({ message: 'No exercise with this ID!' });
        }
        res.json(exercise);
    } catch (err) {
        res.status(500).json(err);
    }
},
};
