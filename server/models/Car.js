const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    name: { type: String, required: true },
    brand: { type: String, required: true },
    year: { type: String, required: true }, // Using String to accommodate "2020/21" or "2008/10" formats seen in data
    price: { type: Number, default: null }, // Null implies "Contact for Price"
    kms: { type: String, required: true },
    variant: { type: String, required: true },
    colour: { type: String, required: true },
    transmission: { type: String, required: true },
    fuel: { type: String, required: true },
    owner: { type: String, required: true },
    insurance: { type: String, default: 'Valid' },
    registration: { type: String, required: true },
    description: { type: String, required: true },
    features: [{ type: String }], // Array of strings
    engine: { type: String },
    maxPower: { type: String },
    maxTorque: { type: String },
    images: [{
        url: { type: String, required: true },
        publicId: { type: String, required: true }
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Car', carSchema);
