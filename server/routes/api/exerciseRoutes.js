const router = require('express').Router()
const {
    getAllExercises,
    getExerciseByDate,
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

// /api/exercises/date/:date
router.route('/date/:date')
.get(getExerciseByDate);



module.exports = router;