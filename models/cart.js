const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/dbConfig');

const Cart = sequelize.define('Cart', {
    cart_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'auth_app_customuser',
            key: 'id'
        }
    }
}, {
    tableName: 'cart',
    timestamps: true
});

sequelize.sync({ alter: true}
    .then(() => {
        console.log("Category table is created")
    })
    .catch(err => console.error("❌ Error creating category table:", err))
);

module.exports = Cart;