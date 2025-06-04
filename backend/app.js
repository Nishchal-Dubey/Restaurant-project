
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const User = require('./models/User'); // 🔄 Import User model
const userRoutes = require('./routes/users'); // ✅ Import

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/restaurantDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(async () => {
  console.log("✅ MongoDB connected");
  await createAdminUser(); // ✅ Call to seed admin user
}).catch((err) => {
  console.error("❌ MongoDB connection failed:", err);
});

// 👤 Create Admin user if not exists
const createAdminUser = async () => {
  try {
    const existingAdmin = await User.findOne({ email: 'admin@example.com' });
    if (!existingAdmin) {
      const hashedPassword = await bcrypt.hash('adminpass', 10);
      const admin = new User({
        name: 'Admin',
        email: 'admin@example.com',
        password: hashedPassword,
        role: 'admin',
      });
      await admin.save();
      console.log('✅ Admin user created');
    } else {
      console.log('ℹ️ Admin user already exists');
    }
  } catch (err) {
    console.error('❌ Failed to create admin user:', err);
  }
};

// Routes
const messageRoutes = require('./routes/messages');
const orderRoutes = require('./routes/orders');
const authRoutes = require('./routes/auth');

app.use('/api/messages', messageRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);            // ✅ Mount

// Base route
app.get('/', (req, res) => {
  res.send('🚀 API is running...');
});

// Start Server on PORT 5000
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🌐 Server running at http://localhost:${PORT}`);
});

module.exports = app;