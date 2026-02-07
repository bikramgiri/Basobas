const Hostel = require("../../model/hostler/hostelModel");

// Add Hostel
exports.addHostel = async (req, res) => {
  try {

    let amenities = req.body.amenities;
    let roomTypes = req.body.roomTypes;

    if (!Array.isArray(amenities)) amenities = amenities ? [amenities] : [];
    if (!Array.isArray(roomTypes)) roomTypes = roomTypes ? [roomTypes] : [];

    const {
      name,
      description,
      contactNumber,
      gender,
      location,
      pricing,
      capacity,
      images = [],
      popular = "false",
      verified = "true"
    } = req.body;

    if (
      !name ||
      !description ||
      !location ||
      !pricing ||
      !contactNumber ||
      !capacity ||
      !gender ||
      amenities.length === 0 ||
      roomTypes.length === 0
    ) {
      return res.status(400).json({
        message: "All required fields must be provided.",
        field: "general",
      });
    }

    if (name.trim().length < 5) { 
      return res.status(400).json({ 
        message: "Hostel name must be at least 5 characters long.", 
        field: "name" 
      });
    }

    if (description.trim().length < 20) {
      return res.status(400).json({ 
        message: "Description must be at least 20 characters long.", 
        field: "description" 
      });
    }

    // Location validation (GeoJSON)
    if (
      !location.address ||
      !location.city ||
      !location.area ||
      !location.coordinates ||
      !Array.isArray(location.coordinates.coordinates) ||
      location.coordinates.coordinates.length !== 2 ||
      typeof location.coordinates.coordinates[0] !== "number" || // longitude
      typeof location.coordinates.coordinates[1] !== "number" // latitude
    ) {
      return res.status(400).json({
        message: "Valid GeoJSON location with [lng, lat] is required.",
        field: "location",
      });
    }

    if (!pricing.single && !pricing.double && !pricing.dormitory) {
      return res.status(400).json({
        message: "At least one room price must be provided.",
        field: "pricing",
      });
    }

    if (!/^\d{10}$/.test(contactNumber)) {
      return res.status(400).json({
        message: "Contact number must be exactly 10 digits.",
        field: "contactNumber",
      });
    }

    if (!Number.isInteger(capacity.total) || capacity.total <= 0) {
      return res.status(400).json({ 
        message: "Total capacity must be a positive integer.", 
        field: "capacity.total" 
      });
    }
    if (capacity.available < 0 || capacity.available > capacity.total) {
      return res.status(400).json({ 
        message: "Available must be between 0 and total capacity.", 
        field: "capacity.available" 
      });
    }

    if (!["boys", "girls", "mixed"].includes(gender)) {
      return res.status(400).json({ 
        message: "Invalid gender.", 
        field: "gender" 
      });
    }

    if (amenities.length === 0) {
      return res.status(400).json({ 
        message: "At least one amenity required.", 
        field: "amenities" 
      });
    }

    const validRooms = ["single", "double", "dormitory"];
    if (!roomTypes.every((r) => validRooms.includes(r))) {
      return res.status(400).json({ 
        message: "Invalid room type.", 
        field: "roomTypes" 
      });
    }

    const hostel = await Hostel.create({
      name,
      description,
      images,
      owner: req.user,
      location: {
        address: location.address,
        city: location.city,
        area: location.area,
        coordinates: {
          type: "Point",
          coordinates: location.coordinates.coordinates,
        },
      },
      pricing,
      contactNumber,
      capacity,
      gender,
      amenities,
      roomTypes,
      popular: popular === "false" || popular === false,
      verified: verified === "true" || verified === true,
    });

    return res.status(201).json({
      message: "Hostel created successfully.",
      data: hostel,
    });
  } catch (error) {
    console.error("Add Hostel Error:", error);
    return res.status(500).json({
      message: "Something went wrong while creating the hostel.",
    });
  }
};


// Fetch All Hostels
exports.getAllHostels = async (req, res) => {
    const hostels = await Hostel.find()
      .populate('owner', 'username email') 
      .sort({ createdAt: -1 }); 

    return res.status(200).json({
      message: "Hostels fetched successfully.",
      data: hostels,
      count: hostels.length
    });
};

// Fetch Single Hostel
exports.getSingleHostel = async (req, res) => {
  const hostelId = req.params.id;
  if (!hostelId){
    return res.status(400).json({
      message: "Hostel ID is required.",
      field: "id",
    });
  }

    const hostel = await Hostel.findById(hostelId)
      .populate('owner', 'username email')
      .populate('reviews.user', 'username');

    if (!hostel) {
      return res.status(404).json({
        message: "Hostel not found.",
      });
    }

    return res.status(200).json({
      message: "Hostel fetched successfully.",
      data: hostel,
    });
};

// Update Hostel
exports.updateHostel = async (req, res) => {
  try {
    const hostelId = req.params.id;
    if (!hostelId){
      return res.status(400).json({
        message: "Hostel ID is required.",
        field: "id",
      });
    }

    const hostel = await Hostel.findById(hostelId);
    if (!hostel) {
      return res.status(404).json({ 
        message: "Hostel not found.",
        field: "id"
      });
    }

  const hostelerId = req.user;
    if (hostel.owner !== hostelerId) {
      return res.status(403).json({ 
        message: "You can only update your own hostel.",
        field: "authorization"
       });
     }

    const updateData = {};

    const newImages = req.body.images ? (Array.isArray(req.body.images) ? req.body.images : [req.body.images]) : [];
    updateData.images = [...hostel.images, ...newImages];

    if (req.body.name) updateData.name = req.body.name.trim();
    if (req.body.description) updateData.description = req.body.description.trim();
    if (req.body.contactNumber) updateData.contactNumber = req.body.contactNumber;
    if (req.body.gender) updateData.gender = req.body.gender;

    if (req.body.location) updateData.location = req.body.location;
    if (req.body.pricing) updateData.pricing = req.body.pricing;
    if (req.body.capacity) updateData.capacity = req.body.capacity;

    if (req.body.amenities) {
      let amenities = req.body.amenities;
      if (typeof amenities === 'string') amenities = JSON.parse(amenities);
      if (!Array.isArray(amenities)) amenities = [amenities];
      updateData.amenities = amenities;
    }
    if (req.body.roomTypes) {
      let roomTypes = req.body.roomTypes;
      if (typeof roomTypes === 'string') roomTypes = JSON.parse(roomTypes);
      if (!Array.isArray(roomTypes)) roomTypes = [roomTypes];
      updateData.roomTypes = roomTypes;
    }

    if (req.body.popular !== undefined) updateData.popular = req.body.popular === 'true';
    if (req.body.verified !== undefined) updateData.verified = req.body.verified === 'true';

    const updatedHostel = await Hostel.findByIdAndUpdate(
      hostelId,
      { $set: updateData }, 
      { new: true, runValidators: true }
    );

    return res.status(200).json({
      message: "Hostel updated successfully.",
      data: updatedHostel,
    });
  } catch (error) {
    console.error("Update Hostel Error:", error);
    return res.status(500).json({
      message: "Something went wrong while updating the hostel.",
    });
  }
};

// Delete Hostel 
exports.deleteHostel = async (req, res) => {

  const hostelId = req.params.id;
  if (!hostelId){
    return res.status(400).json({
      message: "Hostel ID is required.",
      field: "id",
    });
  }
  
    const hostel = await Hostel.findById(hostelId);
    if (!hostel) {
      return res.status(404).json({ 
        message: "Hostel not found." 
      });
    }

    const hostelerId = req.user;
    if (hostel.owner !== hostelerId) {
      return res.status(403).json({ 
        message: "You can only delete your own hostel.",
        field: "authorization"
       });
     }

    await Hostel.findByIdAndDelete(hostelId);

    return res.status(200).json({
      message: "Hostel deleted successfully.",
    });
};

