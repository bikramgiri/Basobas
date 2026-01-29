const { userRegister, userLogin, userLogout, forgotPassword, verifyOTP, resetPassword } = require("../../controller/authController")
const catchError = require("../../services/catchError")

const router = require("express").Router()

router.route("/register").post(catchError(userRegister))
router.route("/login").post(catchError(userLogin))
router.route("/logout").post(catchError(userLogout))
router.route("/forgotpassword").post(catchError(forgotPassword))
router.route("/verifyotp").post(catchError(verifyOTP))
router.route("/resetpassword").post(catchError(resetPassword))

module.exports= router