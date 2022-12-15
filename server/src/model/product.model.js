const mongoose = require("mongoose");

const prod = new mongoose.Schema({
  type: { type: String },
  name: { type: String },
  image: { type: String },
  info: { type: String },
  desc: { type: String },
  installs: { type: String },
  rating: { type: String },
  avatar_url: { type: String },
});

const Product = mongoose.model("product", prod);

module.exports = Product;
