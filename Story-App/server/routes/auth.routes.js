const express = require('express');
const {
  register,
  login,
  getMe,
  logout,
  refreshToken
} = require('../controllers/auth.controller');

const router = express.Router();

const { protect } = require('../middleware/auth');

router.post('/register', register);
router.post('/login', login);
router.post('/refresh-token', refreshToken);
router.get('/me', protect, getMe);
router.get('/logout', protect, logout);

module.exports = router;