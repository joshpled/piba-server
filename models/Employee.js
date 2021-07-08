const { model, Schema } = require("mongoose");

const employeeSchema = new Schema({
  name: String,
  position: String,
  email: String,
  phone: String,
  permissions: String,
  photo: String,
});

module.exports = model("Employee", employeeSchema);
