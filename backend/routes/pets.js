const express = require("express");
const router = express.Router();
const Pets = require("../petModel/Pet");
const { upload } = require("../utils/uploadFile"); // Import multer upload function
const authMiddleware = require("../middleware/jwt"); // Import the auth middleware

// Add New Pet (Admin) with image upload
router.post("/addpet", authMiddleware, upload.single("image"), async (req, res) => {
  const { name, age, breed, description } = req.body;
  const imagePath = req.file ? req.file.path : null; // Get the image path from multer

  try {
    if (!imagePath) {
      return res.status(400).json({ message: "Failed to upload image." });
    }

    const newPet = new Pets({
      name,
      age,
      breed,
      description,
      image: imagePath,
      addedBy: req.user.id, // Access user ID from the req.user object
    });

    const savedPet = await newPet.save();
    res.status(201).json(savedPet);
  } catch (error) {
    console.error("Error while adding pet:", error);
    res.status(500).json({ message: "Failed to add pet listing." });
  }
});

// Endpoint to retrieve all pet listings
router.get('/petsDisplay', async (req, res) => {
  try {
    const pets = await Pets.find(); // Retrieve all pets from the database
    res.json(pets);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

module.exports = router;
