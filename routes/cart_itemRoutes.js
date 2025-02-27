const express = require('express');
const router = express.Router();
const cartItemController = require('../controllers/cart_itemsController');
const { authenticateUser, authorizeRole } = require('../middleware/authMiddleware');

router.post('/', authenticateUser, authorizeRole('customer'), cartItemController.addCartItem);
router.get('/:cart_id', authenticateUser, authorizeRole('customer'), cartItemController.getCartItemsByCartId);
router.put('/:id', authenticateUser, authorizeRole('customer'), cartItemController.updateCartItem);
router.delete('/:id', authenticateUser, authorizeRole('customer'), cartItemController.removeCartItem);

module.exports = router;