const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true
    },
    firstName: {
      type: String,
      required: true,
      trim: true
    },
    lastName: {
      type: String,
      required: true,
      trim: true
    },
    password: {
      type: String,
      required: true
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
    donationHistory: {
      type: Array, // leaving it blank for now
      default: []
    },
    receiverStatus: {
      type: Boolean, // leaving it blank for now
      default: false
    },
    totalAmountPledged: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true
  }
)

const User = mongoose.model("User", userSchema)

module.exports = User
