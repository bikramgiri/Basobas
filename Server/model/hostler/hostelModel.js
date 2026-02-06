const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const locationSchema = new Schema({
  address: { type: String, required: true },
  city: { type: String, required: true },
  area: { type: String, required: true },
  coordinates: {
    type: { type: String, enum: ["Point"], default: "Point" },
    coordinates: { type: [Number], required: true },
  },
});

const pricingSchema = new Schema({
  single: { type: Number },
  double: { type: Number },
  dormitory: { type: Number },
});

const capacitySchema = new Schema({
  total: { type: Number, required: true },
  available: { type: Number, required: true },
});

const reviewSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  comment: { type: String },
  date: { type: Date, default: Date.now },
});

const hostelSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
      required: false
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: false,
    },
    location: {
      type: locationSchema,
      required: true,
    },
    pricing: {
      type: pricingSchema,
      required: true,
    },
    contactNumber: {
      type: String,
      required: true,
    },
    capacity: {
      type: capacitySchema,
      required: true,
    },
    gender: {
      type: String,
      enum: ["boys", "girls", "mixed"],
      required: true,
    },
    amenities: {
      type: [String],
      required: true,
    },
    roomTypes: {
      type: [String],
      enum: ["single", "double", "dormitory"],
      required: true,
    },
    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
    reviewCount: {
      type: Number,
      default: 0,
    },
    reviews: [reviewSchema],
    verified: {
      type: Boolean,
      default: false,
    },
    popular: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

// Geospatial index for location
hostelSchema.index({ "location.coordinates": "2dsphere" });

const Hostel = mongoose.model("Hostel", hostelSchema);
module.exports = Hostel;
