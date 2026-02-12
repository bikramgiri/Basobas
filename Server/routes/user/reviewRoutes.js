const express = require("express");
const router = express.Router();
const isAuthenticated = require("../../middleware/authMiddleware");
const permitTo = require("../../middleware/permitTo");
const { deleteReview, createReview, updateReview, getHostelReviews, getUserReviews, getReview } = require("../../controller/user/reviewController");
const { upload } = require("../../middleware/multerConfig");
const catchError = require("../../services/catchError");

router.route("/reviews/:id")
.post(isAuthenticated, permitTo("user") ,(upload.array('reviewImage', 3)), catchError(createReview))
.get(catchError(getHostelReviews))
.patch(isAuthenticated, permitTo("user"), (upload.array('reviewImage', 3)), catchError(updateReview))
.delete(isAuthenticated, permitTo("user"), catchError(deleteReview));

router.route("/review/:id").get(catchError(getReview));

router.route("/user-review/:id").get(isAuthenticated, permitTo("user"), catchError(getUserReviews));

module.exports = router;