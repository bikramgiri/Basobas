const { addHostel, getAllHostels, getSingleHostel, updateHostel, deleteHostel } = require("../../controller/hosteler/hostelController")
const { upload } = require("../../middleware/multerConfig")
const catchError = require("../../services/catchError")

const router = require("express").Router()

router.route("/hostel")
.post(upload.array('images', 10), catchError(addHostel))
.get(catchError(getAllHostels))

router.route("/hostel/:id")
.get(catchError(getSingleHostel))
.patch(upload.array('images', 10), catchError(updateHostel))
.delete(catchError(deleteHostel))

module.exports= router