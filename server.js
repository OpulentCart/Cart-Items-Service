const express = require("express");
const cors = require("cors");
const app = express();
const { connectDB } = require("./config/dbConfig");
require("dotenv").config();

const cartRoutes = require('./routes/cartRoutes');
const cartItemRoutes = require('./routes/cart_itemRoutes');

// middleware
app.use(express.json());
app.use(cors());

// connect to the database
connectDB();

app.use('/carts', cartRoutes);
app.use('/cart-items', cartItemRoutes);


app.listen(process.env.PORT, () => {
    console.log(`Cart-Items-Service is running on port ${process.env.PORT}`);
});
