const Persona = require('../models/persona.model')
const router = require('express').Router()

// Generic routes

router.route('/').post((req,res) => {
    const newPersona = new Persona(req.body)

    newPersona.save()
        .then(persona => res.json(persona))
        .catch(err => res.status(400).json("Error! " + err))
})

router.route('/').get((req,res) => {
    Persona.find()
        .then(allPersonas => res.json(allPersonas))
        .catch(err => res.status(400).json("Error! " + err))
})

// ID specific routes

router.route('/:id').get((req,res) => {
    Persona.findById({_id: req.params.id})
        .then(persona => res.json(persona))
        .catch(err => res.status(400).json("Error! " + err))
})

router.route('/:id').patch((req,res) => {
    Persona.findByIdAndUpdate(req.params.id ,req.body)
        .then(persona => res.json(persona))
        .catch(err => res.status(400).json("Error! " + err))
})

router.route('/:id').delete( (req,res) => { 
    Persona.deleteOne({_id: req.params.id})
        .then(res.json("Success! User deleted"))
        .catch(err => res.status(400).json("Error! " + err))
})

// Generic job routes

router.route('/:id/job').post((req,res) => {
    Persona.findOneAndUpdate(
        { _id: req.params.id}, 
        { $push: { 
                  jobs: req.body
                } 
        })
        .then(persona => res.json(persona))
        .catch(err => res.status(400).json("Error! " + err))
})

router.route('/:id/jobs/:jobid').patch((req,res) => {
    Persona.findOne(
        { "_id": req.params.id, "jobs._id": req.params.jobid }, 
        { $setField: 
            {'jobs': req.body.name }
        })
        .then(jobs => res.json(jobs))
        .catch(err => res.status(400).json("Error! " + err))
})

router.route('/:id/jobs').get((req,res) => {
    Persona.find(
        {_id: req.params.id}
    )   
        .then(allJobs => res.json(allJobs[0].jobs))
        .catch(err => res.status(400).json("Error! " + err))
})


module.exports = router