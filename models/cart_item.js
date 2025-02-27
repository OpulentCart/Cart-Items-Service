const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/dbConfig');

const CartItems = sequelize.define('CartItem', {
    cart_item_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    cart_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'cart',
            key: 'cart_id'
        },
        onDelete: 'CASCADE'
    },
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'product',
            key: 'product_id'
        },
        onDelete: 'CASCADE'
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    tableName: 'cart_items',
    timestamps: true
});

sequelize.sync({ alter: true})
    .then(() => {
        console.log("Cart-Items table is created")
    })
    .catch(err => console.error("❌ Error creating cart-items table:", err));

module.exports = CartItems;