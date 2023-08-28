const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: false,
    },
    city: {
      type: String,
      required: false,
    },
    country: {
      type: String,
      required: false,
    },
    urls: {
      type: [String],
      required: false,
    },
    pricePerDay: {
      type: String,
      required: false,
    },
    ratings: {
      type: String,
      required: false,
    },
    coordinates: {
      type: { String },
      required: false,
    },
    state: {
      type: String,
      required: false,
    },
    propertyTitle: {
      type: String,
      required: false,
    },
    typeOfProperty: {
      type: String,
      required: false,
    },
    accomadationSize: {
      type: { String },
      requried: false,
    },
    hostImg: {
      type: String,
      required: false,
    },
    propertyDesc: {
      type: String,
      required: false,
    },
    amenities: {
      type: [String],
      required: false,
    },
    reviews: {
      type: String,
      required: false,
    },
    hostContact: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Hotels",hotelSchema);
