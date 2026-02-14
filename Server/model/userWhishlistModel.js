const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userWhishlistSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Wishlist must belong to a user"],
    },
    hostelId: {
      type: Schema.Types.ObjectId,
      ref: "Hostel",
      required: [true, "Wishlist must belong to a hostel"],
    },
  },
  { timestamps: true }
);

userWhishlistSchema.index({ userId: 1, hostelId: 1 }, { unique: true });

const UserWhishlist = mongoose.model("UserWhishlist", userWhishlistSchema);
module.exports = UserWhishlist;