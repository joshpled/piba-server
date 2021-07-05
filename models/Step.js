const { model, Schema } = require("mongoose");

const stepschema = new Schema({
  title: String,
  createdAt: String,
});

module.exports = model("Step", stepschema);
