const { model, Schema } = require("mongoose");

const dogSchema = new Schema({
  name: String,
  age: Number,
  inFoster: Boolean,
  createdAt: String,
});

module.exports = model("Dog", dogSchema);
