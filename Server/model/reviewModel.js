const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Review must belong to a user"],
    },
    hostel: {
      type: Schema.Types.ObjectId,
      ref: "Hostel",
      required: [true, "Review must belong to a hostel"],
      index: true,
    },
    rating: {
      type: Number,
      required: [true, "Rating is required"],
      min: [1, "Rating must be at least 1"],
      max: [5, "Rating cannot exceed 5"],
    },
    comment: {
      type: String,
      trim: true,
      minlength: [4, "Comment must be at least 4 characters long"],
      maxlength: [100, "Comment cannot exceed 100 characters"],
    },
    reviewImage:{ 
      type: [String]
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

reviewSchema.index({ user: 1, hostel: 1 }, { unique: true });

// Virtuals to populate user info in reviews
reviewSchema.virtual("userInfo", {
  ref: "User",
  localField: "user",
  foreignField: "_id",
  justOne: true,
});

// use pre-save hook to round rating to nearest integer
reviewSchema.pre("save", function (next) {
  if (this.isModified("rating")) {
    this.rating = Math.round(this.rating);
  }
});

// Helper to update hostel stats
const updateHostelRating = async (hostelId) => {
  try {
    const stats = await mongoose.model("Review").aggregate([
      { $match: { hostel: hostelId } },
      {
        $group: {
          _id: null,
          avgRating: { $avg: "$rating" },
          reviewCount: { $sum: 1 },
        },
      },
    ]);

    const updateData = stats.length > 0
      ? {
          rating: Number(stats[0].avgRating.toFixed(1)), // Round to 1 decimal place
          reviewCount: stats[0].reviewCount,
        }
      : { rating: 0, reviewCount: 0 };

    await mongoose.model("Hostel").findByIdAndUpdate(hostelId, updateData, {
      runValidators: true,
    });
  } catch (error) {
    console.error(`Failed to update hostel rating for ${hostelId}:`, error);
  }
};

// Hooks – NO next parameter for async post hooks
reviewSchema.post("save", async function (doc) {
  await updateHostelRating(doc.hostel);
});

// For findOneAndDelete, we need to get the deleted document to know the hostel ID
reviewSchema.post("findOneAndDelete", async function (doc) {
  if (doc) await updateHostelRating(doc.hostel);
});

// For findOneAndUpdate, we need to get the updated document to know the hostel ID
reviewSchema.post("findOneAndUpdate", async function () {
  const updatedDoc = await this.model.findOne(this.getQuery());
  if (updatedDoc) {
    await updateHostelRating(updatedDoc.hostel);
  }
});

const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;