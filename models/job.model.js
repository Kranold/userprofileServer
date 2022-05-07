const mongoose = require('mongoose')
const Persona = require('./persona.model')
const Schema =  mongoose.Schema

const jobSchema = new Schema({
    title: {type: String, required: true},
    persona: { type: Schema.Types.ObjectId, required: true, ref: "Persona" },
    createdDate : {
        type: Date,
        default: () => Date.now()
    },
    lastModifiedDate : {
        type: Date,
        default: () => Date.now()
    }
})

const Job = mongoose.model('Job', jobSchema)
module.exports = Job
