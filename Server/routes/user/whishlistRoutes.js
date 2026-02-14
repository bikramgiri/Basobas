const express = require("express");
const router = express.Router();
const catchError = require("../../services/catchError")
const isAuthenticated = require("../../middleware/authMiddleware");
const permitTo = require("../../middleware/permitTo");
const { addToWhishlist, fetchWhishlistHostels, removeFromWhishlist} = require("../../controller/user/whishlistController");

router.route("/whishlist")
.post(isAuthenticated, permitTo("user"), catchError(addToWhishlist))
.get(isAuthenticated, permitTo("user"), catchError(fetchWhishlistHostels))

router.route("/whishlist/:id")
.delete(isAuthenticated, permitTo("user"), catchError(removeFromWhishlist))

module.exports = router;