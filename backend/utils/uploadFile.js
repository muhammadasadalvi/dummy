const fs = require("fs");
const multer = require("multer");

// Configure multer storage
const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, cb) => {
    console.log("Uploaded file details:", file); // Log the uploaded file details here
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// Initialize multer
const upload = multer({ storage: storage });

// Export the upload function
module.exports = {
  upload,
};
