const express = require('express'); 
const authControllers = require('../controllers/auth-controllers');

const authRoutes = express.Router();

authRoutes.post('/signup', authControllers.signUp);
authRoutes.post('/login', authControllers.login)

module.exports = authRoutes;

