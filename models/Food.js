const mongoose = require('mongoose')
const Schema = mongoose.Schema 

const foodSchema = new Schema({
    name: {
        type: String, 
        required: true
    }, 
    protein: {
        type: Number, 
        default: 0, 
    },
    calories: {
        type: Number,
        default: 0, 
    },
    fat: {
        type: Number,
        default: 0, 
    },
    carbs: {
        type: Number, 
        default: 0,
    },
})

const daySchema = new Schema({
    day: {
        type: String,
        required: true
    },
    meals: 
        [foodSchema],
    
})

const userSchema = new Schema ({
    username: {
        type: String, 
        required: true, 
    },
    password: {
        type: String, 
        required: true, 
    }
})

module.exports = mongoose.model("Food", foodSchema)
module.exports = mongoose.model("Day", daySchema)
module.exports = mongoose.model("User", userSchema)