const Hostel = require("../../model/hostelModel");
const User = require("../../model/userModel");
const UserWhishlist = require("../../model/userWhishlistModel");

// Add To Whishlist
exports.addToWhishlist = async (req, res, next) => {
  const userId = req.user._id;
  if (!userId) {
    return res.status(401).json({ 
      message: "User not authenticated",
      field: "userId"
    });
  }

  const hostelId = req.body.hostelId || req.params.id;
  if (!hostelId) {
    return res.status(400).json({ 
      message: "Hostel ID is required",
      field: "hostelId"
    });
  }

  const user = await User.findById(userId);
  if (!user) {
    return res.status(404).json({ 
      message: "User not found",
      field: "userId"
    });
  }

  const hostel = await Hostel.findById(hostelId);
  if (!hostel) {
    return res.status(404).json({ 
      message: "Hostel not found",
      field: "hostelId"
    });
  }

  const existing = await UserWhishlist.findOne({ userId, hostelId });
  if (existing) {
    return res.status(400).json({
      message: "Hostel already in whishlist",
      field: "hostelId"
    });
  }

  await UserWhishlist.create({ userId, hostelId });

  const WhishlistHostel = await Hostel.findById(hostelId)
    .populate("owner", "username email _id")
    .populate({
      path: "reviews",
      populate: {
        path: "userInfo",
        select: "username email _id",
      },
      options: { sort: { createdAt: -1 } },
    })
    .select("-__v");

  res.status(201).json({
    message: "Hostel added to wishlist successfully",
    data: WhishlistHostel,
  });
};

// Fetch Whishlist Hostels
exports.fetchWhishlistHostels = async (req, res, next) => {
  const userId = req.user._id;

  if (!userId) {
    return res.status(401).json({ 
      message: "User not authenticated",
    });
  }

  const wishlistEntries = await UserWhishlist.find({ userId })
    .populate({
      path: "hostelId",
      populate: [
        { path: "owner", select: "username email _id" }, // populate owner object
        {
          path: "reviews",
          populate: {
            path: "userInfo",
            select: "username email _id",
          },
          options: { sort: { createdAt: -1 } },
        },
      ],
    })

    // *Or 
    // .populate({
    //   path: "hostelId",
    //   select: "name images location pricing rating reviewCount AvgRating capacity roomTypes amenities gender"
    // })
    
    .sort({ createdAt: -1 });

  const hostels = wishlistEntries
    .map(entry => entry.hostelId)
    .filter(Boolean); 

  res.status(200).json({
    message: "Wishlist hostels fetched successfully",
    totalHostels: hostels.length,
    data: hostels,
  });
};

// Remove From Whishlist
exports.removeFromWhishlist = async (req, res, next) => {
  const userId = req.user._id;
  if (!userId) {
    return res.status(401).json({ 
      message: "User not authenticated",
      field: "userId"
    });
  }

  const hostelId = req.params.id;
  if (!hostelId) {
    return res.status(400).json({ 
      message: "Hostel ID is required",
      field: "hostelId"
    });
  }

  const hostel = await Hostel.findById(hostelId);
  if (!hostel) {
    return res.status(404).json({
      message: "Hostel not found",
      field: "hostelId"
    });
  }

  await UserWhishlist.findOneAndDelete({ userId, hostelId });

  res.status(200).json({
    message: "Hostel removed from wishlist successfully",
  });
};
