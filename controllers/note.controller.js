const Note = require('../models/note.model')
const Persona = require('../models/persona.model')
const router = require('express').Router()

// Get all notes
router.route('/').get((req,res) => {
    Note.find()
        .then(allNotes => res.json(allNotes))
        .catch(err => res.status(400).json("Error! " + err))
})

// Get all notes with personas
router.route('/withPersonas').get((req,res) => {
    Note.find().populate('persona')  
        .then(allNotes => res.json(allNotes))
        .catch(err => res.status(400).json("Error! " + err))
})

// Get a note by id
router.route('/:id').get((req,res) => {
    Note.findById({_id: req.params.id})
        .then(notes => res.json(notes)) 
        .catch(err => res.status(400).json("Error! " + err))
})

// Get all notes from a persona
router.route('/persona/:id').get((req,res) => {
    Note.find({persona: req.params.id})
        .then(notes => res.json(notes))
        .catch(err => res.status(400).json("Error! " + err))
})

// Create a new note
router.route('/').post((req,res) => {
    const newNote = new Note(req.body)
    newNote.save()
        .then(note => res.json(note))
        .catch(err => res.status(400).json("Error! " + err))
})

// Update a note
router.route('/:id').patch((req,res) => {
    Note.findByIdAndUpdate({_id: req.params.id} , req.body)
        .then(note => res.json(note))
        .catch(err => res.status(400).json("Error! " + err))
})

// Delete a note
router.route('/:id').delete( (req,res) => { 
    Note.deleteOne({_id: req.params.id})
        .then(res.json("Success! Note deleted"))
        .catch(err => res.status(400).json("Error! " + err))
})

module.exports = router