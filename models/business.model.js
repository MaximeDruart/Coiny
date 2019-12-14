const mongoose = require('mongoose');

const businessSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    location: {
        type: Object,
        default: null
        // will be of GeoJSON type later
        // type: {
        //     type: String, // Don't do `{ location: { type: String } }`
        //     enum: ['Point'], // 'location.type' must be 'Point'
        //     required: true
        // },
        // coordinates: {
        //     type: [Number],
        //     required: true
        // }
    },
    googleMapsLink : {
        type : String,
        required : true,
    },
    phoneNumber : {
        type : Number,
        required : true
    },
    moneyAllocated : {
        type : Number,
        default : 0
    }
}, {
    timestamps: true,
});

const Business = mongoose.model('Business', businessSchema);

module.exports = Business;