const { model, Schema } = require("mongoose");

const volunteerSchema = new Schema({
  firstName: String,
  lastName: String,
  age: Number,
  email: String,
  phone: String,
  address: String,
  addressTwo: String,
  zipcode: Number,
  city: String,
  state: String,
  sign: Boolean,
});

module.exports = model("Volunteer", volunteerSchema);
