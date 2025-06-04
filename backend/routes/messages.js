


const express = require('express');
const router = express.Router();
const Message = require('../models/message');

// POST: Save message
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    const newMessage = new Message({
      name,
      email,
      phone,
      message,
    });

    await newMessage.save();
    res.status(201).json({ success: true, message: 'Message sent successfully!' });
  } catch (err) {
    res.status(500).json({ success: false, error: 'Server error' });
  }
});

// GET: Fetch all messages (for admin)
router.get('/', async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch messages' });
  }
});

module.exports = router;
