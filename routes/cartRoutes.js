const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

router.post('/', cartController.createCart);
router.get('/', cartController.getCartOfCustomer);
router.delete('/', cartController.deleteCart);