const { model, Schema } = require("mongoose");

const DeleteResponseSchema = new Schema({
  success: Boolean,
  message: String,
});

module.exports = model("DeleteResponse", DeleteResponseSchema);
