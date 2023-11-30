// const express = require('express');
// const router = require('express').Router();
// const apiRoutes = require('./api');// you can see that im importing the api folder here
// const homeRoutes = require('./homeRoutes.js');// this is importing the home routes folder

// router.use('/api', apiRoutes);// this is saying that if we go to /api then use the api routes
// router.use('/', homeRoutes);//this is saying that if we go to / then use the home routes

// // router.use(express.static(__dirname + '/public')); //this is making anything in the(/public route will be available) public folder available to the browser 
// //and then i wnat to distinguish a different path with anything to do w api 
// router.use(express.static(path.join(__dirname, '../../client/dist')))

// router.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../../client/dist/index.html'))
// })  ///////////////////i added this from an example that stanley did in the video im not sure if it works yet////////////////////


// module.exports = router;// this is exporting the router a necessary step to make sure the routes work


const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => res.send('Wrong Route!'));

module.exports = router;
