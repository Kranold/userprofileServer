const mongoose = require('mongoose')
const Schema =  mongoose.Schema

const userSchema = new Schema({
    stytchUserId: {type: String},
    email: {type: String},
    firstName: {type: String},
    lastName: {type: String},
    createdDate : {
        type: Date,
        default: () => Date.now()
    }
})

const User = mongoose.model('User', userSchema)
module.exports = User