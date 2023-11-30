const router = require('express').Router();
const { User, Exercise } = require('../models');
const withAuth = require('../utils/auth');
const path = require('path');

router.get('/', async(req,res)=>{
  res.sendFile(path.join(__dirname, '../../client/build/index.html'));
});




module.exports = router;