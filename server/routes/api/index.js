const express = require('express');
const router = express.Router();
const userRoutes = require('./userRoutes');
const exerciseRoutes = require('./exerciseRoutes');

router.use('/users', userRoutes);
router.use('/exercises', exerciseRoutes);

module.exports = router;