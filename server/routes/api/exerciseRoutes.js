const router = require('express').Router()
const {
    getAllExercises,
    getAllExercisesByUserId,
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

// /api/exercises/:userId
router.route('/user/:userId')
.get(getAllExercisesByUserId)

// /api/exercises/:exerciseId
router.route('/:exerciseId')
.get(getExerciseById)
.put(updateExercise)
.delete(deleteExercise);

// /api/exercises/date/:date
router.route('/date/:date/:userId')
.get(getExerciseByDate);



module.exports = router;