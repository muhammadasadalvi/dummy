const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  breed: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String }, // Image URL
  available: { type: Boolean, default: true }, // Whether the pet is available for adoption
  addedBy: { type: mongoose.Types.ObjectId, ref: "User" }, // Admin adding the listing
});

module.exports = mongoose.model("Pet", PetSchema);
