const { addHostel, getAllHostels, getSingleHostel, updateHostel, deleteHostel } = require("../../controller/hosteler/hostelController")
const catchError = require("../../services/catchError")

const router = require("express").Router()

router.route("/hostel")
.post( catchError(addHostel))
.get(catchError(getAllHostels))

router.route("/hostel/:id")
.get(catchError(getSingleHostel))
.patch(catchError(updateHostel))
.delete(catchError(deleteHostel))

module.exports= router