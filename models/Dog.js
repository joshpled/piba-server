const { model, Schema } = require('mongoose');

const dogSchema = new Schema({
    name: String,
    age: Number,
    inFoster: Boolean,
    createdAt: String,
    user: {
      type: Schema.Types.ObjectId,
      ref: 'users'
    }
  });
  
  module.exports = model('Dog', dogSchema);