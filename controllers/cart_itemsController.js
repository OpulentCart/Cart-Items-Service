const CartItem = require('../models/cart_item');
const Cart = require('../models/cart');

// get cart Items by cart ID
exports.getCartItemsByCartId = async (req, res) => {
    try{
        const cartItems = await CartItem.findAll({ 
            where: { cart_id: req.params.cart_id}
        });
        return res.status(200).json({
            success: true,
            cartItems
        });
    }catch(error){
        console.error("Error in getting all the Cart-iems: ", error.message);
        return res.status(500).json({
            success: false,
            message: "Failed to get cart-iems"
        });
    }
};

exports.addCartItem = async (req, res) => {
    try{
        const { cart_id, product_id, quantity} = req.body;
        const cartItem = await CartItem.create({
            cart_id,
            product_id,
            quantity
        });
        return res.status(201).json({
            success: true,
            message: "Cart Item added successfully"
        });
    }catch(error){
        console.error("Error in adding a cart item");
        return res.status(500).json({
            success: false,
            message: "Failed to add a cart Item"
        });
    }
};

exports.updateCartItem = async (req, res) => {
    try {
        const { quantity } = req.body;
        const cartItem = await CartItem.findByPk(req.params.id);

        if (!cartItem) {
            return res.status(404).json({ error: 'Cart item not found' });
        }

        cartItem.quantity = quantity;
        await cartItem.save();

        return res.status(200).json({
            success: true,
            cartItem
        });

    } catch (error) {
        console.error("Error in updating the quantity of the cart-item", error.message);

        return res.status(500).json({
            success: false,
            message: "Failed to update the quantity"
        });
    }
};


// Remove item from cart
exports.removeCartItem = async (req, res) => {
    try {
        const cartItem = await CartItem.findByPk(req.params.id);
        if (!cartItem) {
            return res.status(404).json({ error: 'Cart item not found' });
        }
        await cartItem.destroy();
        return res.status(200).json({ message: 'Cart item removed successfully' });
    } catch (error) {
        console.error("error in removing item from cart", error.message);
        return res.status(500).json({ success: false, message: 'Error removing cart item' });
    }
};