const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/leads', require('./routes/leadRoutes'));

app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'CoreVex API is running' });
});

// Database connection placeholder
const connectDB = async () => {
    try {
        if (!process.env.MONGODB_URI) {
            console.log('MongoDB URI is not defined in .env, skipping connection for now.');
            return;
        }
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
    await connectDB();
    console.log(`Server is running on port ${PORT}`);
});
