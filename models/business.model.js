const mongoose = require("mongoose")
const businessSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true
    },
    name: {
      type: String,
      required: true,
      trim: true,
      tags: { type: [String], index: true }
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

    // we'll require a link later but for test purposes it's a real hassle
    googleMapsLink: {
      type: String
      // required : true,
    },
    phoneNumber: {
      type: Number,
      required: true
    },
    moneyAllocated: {
      type: Number,
      default: 0
    },
    picture: {
      type: String,
      default: "https://image.flaticon.com/icons/png/512/679/679845.png"
    },
    type: {
      type: String,
      default: "store",
      tags: { type: [String], index: true }
      // required : true
    },
    transactions: {
      type: Array,
      default: []
    },
    description: {
      type: String,
      default: "Description de votre commerce"
    }
  },
  {
    autoIndex: false,
    timestamps: true
  }
)

const Business = mongoose.model("Business", businessSchema)

module.exports = Business
