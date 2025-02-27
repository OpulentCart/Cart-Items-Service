const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');
const { authenticateUser, authorizeRole } = require('../middleware/authMiddleware');

router.post('/', cartController.createCart);
router.get('/', cartController.getCartOfCustomer);
router.delete('/', cartController.deleteCart);

module.exports = router;