const router = require('express').Router();
const {
    getAllExercises,
    getExerciseById,
    createExercise,
    updateExercise,
    deleteExercise
} = require('../../controllers/exerciseController');

// /api/exercises
router.route('/')
.get(getAllExercises)
.post(createExercise);

// /api/exercises/:exerciseId
router.route('/:exerciseId')
.get(getExerciseById)
.put(updateExercise)
.delete(deleteExercise);

module.exports = router;