const { model, Schema } = require('mongoose');

const adopterSchema = new Schema({
  firstName: String, 
  lastName: String, 
  address: String, 
  city: String, 
  state: String,
  zip: Number, 
  primaryPhone: String,
  secondPhone: String,
  thirdPhone: String,
  emailOne: String,
  emailTwo: String,
  associatedAnimals: String,
  appliedAnimals: String, 
  username: String,
  createdAt: String,
});

module.exports = model('Adopter', adopterSchema);
