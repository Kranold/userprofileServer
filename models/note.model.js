const mongoose = require('mongoose')
const Schema =  mongoose.Schema

const noteSchema = new Schema({
    title: {type: String, required: true},
    persona: [{ type: Schema.Types.ObjectId, ref: 'Persona' }],
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


const Note = mongoose.model('Note', noteSchema)
module.exports = Note
