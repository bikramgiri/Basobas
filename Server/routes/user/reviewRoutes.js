const express = require("express");
const router = express.Router();
const isAuthenticated = require("../../middleware/authMiddleware");
const permitTo = require("../../middleware/permitTo");
const { deleteReview, createReview, updateReview, getHostelReviews, getUserReviews, getReview } = require("../../controller/user/reviewController");
const { upload } = require("../../middleware/multerConfig");

router.route("/reviews/:id")
.post(isAuthenticated, permitTo("user") ,(upload.array('reviewImage', 3)), createReview)
.get(getHostelReviews)
.patch(isAuthenticated, permitTo("user"), (upload.array('reviewImage', 3)), updateReview)
.delete(isAuthenticated, permitTo("user"), deleteReview);

router.route("/review/:id").get(getReview);

router.route("/user-review/:id").get(isAuthenticated, permitTo("user"), getUserReviews);

module.exports = router;