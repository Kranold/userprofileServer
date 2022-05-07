const Persona = require('../models/persona.model')
const router = require('express').Router()

// Get all personas
router.route('/').get((req,res) => {
    Persona.find()
        .then(allPersonas => res.json(allPersonas))
        .catch(err => res.status(400).json("Error! " + err))
})

// Get personas by ID
router.route('/:id').get((req,res) => {
    Persona.findById({_id: req.params.id})
        .then(persona => res.json(persona))
        .catch(err => res.status(400).json("Error! " + err))
})

// Create new profile
router.route('/').post((req,res) => {
    const newPersona = new Persona(req.body)
    newPersona.save()
        .then(persona => res.json(persona))
        .catch(err => res.status(400).json("Error! " + err))
})

// Updated a persona
router.route('/:id').patch((req,res) => {
    Persona.findByIdAndUpdate({_id: req.params.id} ,req.body)
        .then(persona => res.json(persona))
        .catch(err => res.status(400).json("Error! " + err))
})

// Delete a persona
router.route('/:id').delete( (req,res) => { 
    Persona.deleteOne({_id: req.params.id})
        .then(res.json("Success! User deleted"))
        .catch(err => res.status(400).json("Error! " + err))
})

module.exports = router