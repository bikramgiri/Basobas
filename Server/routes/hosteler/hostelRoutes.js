const { addHostel, getAllHostels, getSingleHostel, updateHostel, deleteHostel } = require("../../controller/hosteler/hostelController")
const isAuthenticated = require("../../middleware/authMiddleware")
const { upload } = require("../../middleware/multerConfig")
const permitTo = require("../../middleware/permitTo")
const catchError = require("../../services/catchError")

const router = require("express").Router()

router.route("/hostel")
.post(isAuthenticated, permitTo('hosteler'), upload.array('images', 10), catchError(addHostel))
.get(catchError(getAllHostels))

router.route("/hostel/:id")
.get(catchError(getSingleHostel))
.patch(isAuthenticated, permitTo('hosteler'), upload.array('images', 10), catchError(updateHostel))
.delete(isAuthenticated, permitTo('hosteler'), deleteHostel)

module.exports= router