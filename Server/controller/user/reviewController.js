const Hostel = require("../../model/hostelModel");
const Review = require("../../model/reviewModel");

// Create a review
exports.createReview = async (req, res, next) => {
  const files = req.files;
  let reviewImage = files ? files.map(file => file.filename) : [];

  const { rating, comment } = req.body;

  const userId = req.user._id;
  if (!userId) {
    return res.status(401).json({ message: "User not authenticated" });
  }
  const hostelId = req.params.id;
  if (!hostelId) {
    return res.status(400).json({ message: "Hostel ID is required" });
  }

  const existingReview = await Review.findOne({
    user: userId,
    hostel: hostelId,
  });
  if (existingReview) {
    return res.status(400).json({ message: "You have already reviewed this hostel" });
  }

  const hostel = await Hostel.findById(hostelId);
  if (!hostel) {
    return res.status(404).json({ message: "Hostel not found" });
  }

try {
    const review = await Review.create({
      user: userId,
      hostel: hostelId,
      rating,
      comment,
      reviewImage,
    });

    res.status(201).json({
      message: "Review created successfully",
      data: review,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const errors = {};
      Object.keys(error.errors).forEach((key) => {
        errors[key] = {
          message: error.errors[key].message,
          field: key,
        };
      });

      return res.status(400).json({
        message: "Validation failed",
        errors
      });
    }

    // Other errors (e.g. database issues)
    return next(error);
    // *Or
    // return res.status(500).json({
    //   message: "Something went wrong!",
    // });
  }
};

// Fetch all reviews for a specific hostel
exports.getHostelReviews = async (req, res) => {
  const hostelId = req.params.id;
  if (!hostelId) {
    return res.status(400).json({ message: "Hostel ID is required" });
  }

  const reviews = await Review.find({ hostel: hostelId })
    .populate("hostel", "name")
    .populate("user", "username email") 
    .sort("-createdAt")
    .select("-__v -rating"); 

  if (reviews.length === 0) {
    return res.status(404).json({ message: "No reviews found for this hostel" });
  }

  res.status(200).json({
    reviewCount: reviews.length,
    data: reviews,
  });
};

// 3. Fetch a single review (by review ID)
exports.getReview = async (req, res, next) => {
  const reviewId = req.params.id;
  if (!reviewId) {
    return res.status(400).json({ message: "Review ID is required" });
  }

  const review = await Review.findById(reviewId)
    .populate("user", "username email")
    .select("-__v");

  if (!review) {
    return res.status(404).json({ message: "Review not found" });
  }

  res.status(200).json({
    data: review,
  });
};

// Update user own review
exports.updateReview = async (req, res, next) => {
  const reviewId = req.params.id;
  if (!reviewId) {
    return res.status(400).json({ message: "Review ID is required" });
  }

  const review = await Review.findById(reviewId);
  if (!review) {
    return res.status(404).json({ message: "Review not found" });
  }

  const userId = req.user._id;
  if (!userId) {
    return res.status(401).json({ message: "User not authenticated" });
  }

  if (review.user.toString() !== userId.toString()) {
    return res.status(403).json({ message: "You can only update your own review" });
  }
  
  const files = req.files;
  let reviewImage = files ? files.map(file => file.filename) : [];

  const { rating, comment } = req.body;

  try {
  // Update review
  if (rating !== undefined) review.rating = rating;
  if (comment !== undefined) review.comment = comment;
  if (reviewImage.length > 0) review.reviewImage = reviewImage;

  await review.save();

  res.status(200).json({
    message: "Review updated successfully",
    data: review,
  });
  } catch (error) {
    if (error.name === "ValidationError") {
      const errors = {};
      Object.keys(error.errors).forEach((key) => {
        errors[key] = {
          message: error.errors[key].message,
          field: key,
        };
      });

      return res.status(400).json({
        message: "Validation failed",
        errors
      });
    }

    // Other errors (e.g. database issues)
    return res.status(500).json({
      message: "Something went wrong!",
    });
    
  }
};

// Delete user own review
exports.deleteReview = async (req, res) => {
  const reviewId = req.params.id;
      if (!reviewId) {
      return res.status(400).json({ message: "Review ID is required" });
      }

  const review = await Review.findById(reviewId);
  if (!review) {
    return res.status(404).json({ message: "Review not found" });
  }

  const userId = req.user._id;
  if (!userId) {
    return res.status(401).json({ message: "User not authenticated" });
  }

  if (review.user.toString() !== userId.toString()) {
    return res.status(403).json({ message: "You can only delete your own review" });
  }
  // triggers post("findOneAndDelete") hook to recalculate hostel rating
  await Review.findByIdAndDelete(reviewId); 

  res.status(200).json({
    message: "Review deleted successfully",
  });
};

// Fetch all reviews by a specific user
exports.getUserReviews = async (req, res, next) => {
  const userId = req.params.id;
  if (!userId) {
    return res.status(400).json({ message: "User ID is required" });
  }

  const reviews = await Review.find({ user: userId })
    .populate("hostel", "name location")
    .sort("-createdAt")
    .select("-__v");
  if (reviews.length === 0) {
    return res.status(404).json({ message: "No reviews found for this user" });
  }

  res.status(200).json({
    totalReviews: reviews.length,
    data: reviews,
  });
};

