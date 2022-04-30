const mongoose = require('mongoose')
const Schema =  mongoose.Schema

const jobSchema = new Schema({
    name: {type: String, required: true}    
})

const personaSchema = new Schema({
    name: {type: String, required: true},
    title: String,
    quote: String,
    jobs: [jobSchema],
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
