const Cart = require('../models/cart');
const CartItem = require('../models/cart_item');

// create a new cart
exports.createCart = async(req, res) => {
    try{
        const user_id = req.user.user_id;

        // check if a cart already exists for the suer
        const existingCart = await Cart.findOne({ where: { user_id: user_id }});
        if(existingCart) {
            
            return res.status(400).json({
                success: true,
                message: 'A cart already exists for you'
            });
        }
        const cart = await Cart.create({ user_id }); 
        return res.status(201).json({
            success: true,
            cart
        });
    }catch(error){
        console.error('Error in creating a new cart: ', error.message);
        return res.status(500).json({
            success: false,
            message: "Failed to create a new cart"
        });
    }
};

// delete a cart
exports.deleteCart = async(req, res) => {
    try{
        const cart = await Cart.findOne({ where: {user_id: req.user.user_id}});
        if(!cart){
            return res.status(404).json({
                success: false,
                message: "Cart not found"
            });
        }
        await cart.destroy();
        return res.status(200).json({
            success: true,
            message: 'Cart deleted successfully'
        });
    }catch(error){
        console.error("Error in deleting a cart", error.message);
        return res.status(500).json({
            success: false,
            message: "Failed to delete cart"
        });
    }
};

// get a cart by ID
exports.getCartOfCustomer = async(req, res) => {
    try{
        const cart = await Cart.findOne({ user_id: req.user.user_id });
        if(!cart) {
            return res.status(404).json({
                success: false,
                message: "Cart not found"
            });
        }
        return res.status(200).json({
            success: true,
            cart
        });
    }catch(error){
        console.error("Error in getting cart of the customer", error.message);
        return res.status(500).json({
            success: false,
            message: "Faile to get the cart"
        });
    }
};