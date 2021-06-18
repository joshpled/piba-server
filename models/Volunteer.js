const { model, Schema } = require("mongoose");

const volunteerSchema = new Schema({
  fullname: String,
  age: Number,
  email: String,
  phone: String,
  address: String,
  addressTwo: String,
  zipcode: Number,
  city: String,
  state: String,
  sign: String,
});

module.exports = model("Volunteer", volunteerSchema);
