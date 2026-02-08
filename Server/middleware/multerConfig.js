const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {

    const allowedFileTypes = ["image/jpeg", "image/png", "image/jpg"];
    if (!allowedFileTypes.includes(file.mimetype)) {
      cb(new Error("Invalid file type. Only JPEG, JPG and PNG are allowed."));
      return;
    }

    const maxSize = 10 * 1024 * 1024; 
    if (file.size > maxSize) {
      cb(new Error("File size exceeds the limit of 10MB."));
      return;
    }

    cb(null, "./storage"); 
  },
  filename: function (req, file, cb) {
    // cb(null, file.originalname)
    // *Or
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + "-" + file.originalname);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, 
});

module.exports = { upload };
