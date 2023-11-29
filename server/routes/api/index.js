const router = require('express').Router();

router.use('/users', require('./userRoutes.js'));
router.use('/exercises', require('./exerciseRoutes.js'));

module.exports = router;