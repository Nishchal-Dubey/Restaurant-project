

const express = require('express');
const router = express.Router();
const Order = require('../models/order');


// @route   POST /api/orders
// @desc    Create a new order
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, address, cart, total, payment } = req.body;

    // Simple validation
    if (!name || !email || !phone || !address || !cart || !total || !payment) {
      return res.status(400).json({ message: 'Please fill in all required fields.' });
    }

    const newOrder = new Order({
      name,
      email,
      phone,
      address,
      cart,
      total,
      payment,
      createdAt: new Date(),
    });

    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ message: 'Order creation failed', error });
  }
});

// @route   GET /api/orders
// @desc    Get all orders
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.status(200).json(orders);
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ message: 'Fetching orders failed', error });
  }
});

module.exports = router;
