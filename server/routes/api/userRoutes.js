const router = require('express').Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  deleteUser,
  login,
} = require('../../controllers/userController');

// /api/users
router.route('/')
.get(getAllUsers)
.post(createUser);

router.route('/login')
.post(login);

// /api/users/:userId
router.route('/:userId')
.get(getUserById)
.delete(deleteUser);

module.exports = router;