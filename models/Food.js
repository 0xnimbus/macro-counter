const mongoose = require('mongoose')
const Schema = mongoose.Schema

const foodSchema = new Schema({
    foods: {
        type: String,
        required: true
    },
    calories: {
        type: Number, 
        // required: true 
    } 
})

module.exports = mongoose.model('Food', foodSchema)