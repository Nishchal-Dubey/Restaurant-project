
const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  message: { type: String, required: true }
}, {
  timestamps: true // ✅ Automatically adds createdAt and updatedAt fields
});

module.exports = mongoose.model('Message', messageSchema);
