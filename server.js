const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const bcrypt = require('bcrypt'); // For password hashing
const session = require('express-session'); // For session management
const cors = require('cors');
app.use(cors());

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/tycs', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Define a schema and model
const orderSchema = new mongoose.Schema({
    customerName: String,
    customerEmail: String,
    orderDetails: String,
});

const Order = mongoose.model('Order', orderSchema);

// Root route
app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Order Page</h1><form action="/submit-order" method="POST"><input type="text" name="customerName" placeholder="Your Name" required><input type="email" name="customerEmail" placeholder="Your Email" required><textarea name="orderDetails" placeholder="Order Details" required></textarea><button type="submit">Order Now</button></form>');
});


// Submit order route
app.post('/submit-order', async (req, res) => {
    try {
        const newOrder = new Order(req.body); // Assuming you have an 'Order' model
        await newOrder.save();
        res.send('Order saved successfully!');
    } catch (error) {
        console.log('Error saving order:', error);
        res.status(500).send('Error saving order');
    }
});



// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});