// User Model
const mongoose = require("mongoose");

const users = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["admin", "user"], default: "user" },
  gender: { type: String, enum: ["female", "male"] },
  company_name: { type: String },
  company_website: { type: String },
  industry_name: { type: String },
  job_role: { type: String },
  peoples_inCompany: { type: Number },
  //   purchased_product: [{comment_id:{ type: mongoose.Schema.Types.ObjectId, ref: ""} }] // Refrence Pending
});

const User = mongoose.model("user", users);

module.exports = User;
