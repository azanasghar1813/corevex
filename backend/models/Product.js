const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    slug: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    category: {
        type: String,
        required: true
    },
    shortDescription: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    logo: String,
    thumbnail: String,
    screenshots: [String],
    features: [String],
    technologies: [String],
    demoVideo: String,
    liveDemo: String,
    pricing: String,
    pricingType: {
        type: String,
        enum: ['contact', 'fixed', 'subscription', 'custom', 'free'],
        default: 'contact'
    },
    requirements: [String],
    faqs: [{
        question: String,
        answer: String
    }],
    version: String,
    featured: {
        type: Boolean,
        default: false
    },
    status: {
        type: String,
        enum: ['draft', 'published', 'archived'],
        default: 'draft'
    },
    seo: {
        title: String,
        description: String,
        keywords: String
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Product', productSchema);
