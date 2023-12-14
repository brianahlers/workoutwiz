const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes.js');

router.use('/api', apiRoutes);
// router.use('/', homeRoutes);
router.use((req, res) => {
    res.sendFile(path.join(__dirname, '../../client/build/index.html'));
  });

module.exports = router;
