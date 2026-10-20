const mongoose = require('mongoose');
require('dotenv').config();
const User = require('./models/User');

const seedAdmin = async () => {
    try {
        if (!process.env.MONGODB_URI) {
            console.log('No MONGODB_URI found. Cannot seed.');
            process.exit(1);
        }

        await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB connected.');

        const adminExists = await User.findOne({ email: 'admin@corevex.com' });

        if (adminExists) {
            console.log('Admin user already exists.');
        } else {
            const adminPassword = process.env.ADMIN_PASSWORD;
            if (!adminPassword) {
                console.error('ERROR: ADMIN_PASSWORD environment variable is required in .env');
                process.exit(1);
            }

            const admin = new User({
                name: 'System Admin',
                email: 'admin@corevex.com',
                password: adminPassword, // Will be hashed by the pre-save hook
                role: 'superadmin'
            });

            await admin.save();
            console.log('Admin user created successfully: admin@corevex.com');
        }

        process.exit();
    } catch (error) {
        console.error('Seeding error:', error);
        process.exit(1);
    }
};

seedAdmin();
