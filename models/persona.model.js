const mongoose = require('mongoose')
const Schema =  mongoose.Schema

const personaSchema = new Schema({
    name: {type: String},
    title: String,
    quote: String,
    description: String,
    createdDate : {
        type: Date,
        default: () => Date.now()
    },
    lastModifiedDate : {
        type: Date,
        default: () => Date.now()
    }
})

const Persona = mongoose.model('Persona', personaSchema)
module.exports = Persona
