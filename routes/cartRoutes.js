const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');
const { authenticateUser, authorizeRole } = require('../middleware/authMiddleware');

router.post('/', authenticateUser, authorizeRole('customer'), cartController.createCart);
router.get('/', authenticateUser, authorizeRole('customer'), cartController.getCartOfCustomer);
router.delete('/', authenticateUser, authorizeRole('customer'), cartController.deleteCart);