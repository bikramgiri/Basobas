const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const locationSchema = new Schema({
  address: { type: String, required: true, trim: true },
  city: { type: String, required: true, trim: true },
  area: { type: String, required: true, trim: true },
  coordinates: {
    type: { type: String, enum: ["Point"], default: "Point" },
    coordinates: { type: [Number], required: true },
  },
});

const pricingSchema = new Schema({
  single: { type: Number, min: 0 },
  double: { type: Number, min: 0 },
  dormitory: { type: Number, min: 0 },
});

const capacitySchema = new Schema({
  total: { type: Number, required: true, min: 1 },
  available: { type: Number, required: true, min: 0 },
});

const hostelSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Hostel name is required"],
      trim: true,
      minlength: [5, "Hostel name must be at least 5 characters"],
      maxlength: [100, "Hostel name cannot exceed 100 characters"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
      minlength: [10, "Description must be at least 10 characters"],
      maxlength: [1000, "Description cannot exceed 1000 characters"],
    },
    images: {
      type: [String],
      required: [true, "At least one image is required"],
      minlength: [1, "At least one image is required"],
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
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
      required: [true, "Contact number is required"],
      trim: true,
      match: [/^\+?[1-9]\d{1,14}$/, "Please enter a valid phone number"],
    },
    capacity: {
      type: capacitySchema,
      required: true,
    },
    gender: {
      type: String,
      enum: ["boys", "girls", "mixed"],
      required: [true, "Gender is required"],
    },
    amenities: {
      type: [String],
      required: [true, "Amenities are required"],
      default: [],
    },
    roomTypes: {
      type: [String],
      enum: ["single", "double", "dormitory"],
      required: true,
      default: [],
    },
    rating: {
      type: Number,
      default: 0,
      min: [0, "Rating cannot be less than 0"],
      max: [5, "Rating cannot be greater than 5"],
    },
    reviewCount: {
      type: Number,
      default: 0,
      min: 0,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    popular: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
   },
);

hostelSchema.virtual("AvgRating").get(function () {
  return this.rating; 
});

// Virtual populate for reviews from separate Review collection
hostelSchema.virtual("reviews", {
  ref: "Review",
  localField: "_id",
  foreignField: "hostel",
  justOne: false,
});

// Correct geospatial index
hostelSchema.index({ "location.coordinates": "2dsphere" });

// Optional: text index for search (very useful)
hostelSchema.index({
  name: "text",
  description: "text",
  "location.city": "text",
  "location.area": "text",
});

const Hostel = mongoose.model("Hostel", hostelSchema);
module.exports = Hostel;
