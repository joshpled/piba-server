const {model, Schema} = require('mongoose')

const dogSchema = new Schema ({
    name: String, 
    age: String,
    sex: String, 
    status: String,
    inFoster: Boolean,
    size: String, 
    breed: String,
    description: String,
    photos: [String],
    createdAt: String,
})

module.exports = model('Dog', dogSchema)