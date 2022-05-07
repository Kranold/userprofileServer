const Job = require('../models/job.model')
const router = require('express').Router()

// Get all jobs
router.route('/').get((req,res) => {
    Job.find()
        .then(allJobs => res.json(allJobs))
        .catch(err => res.status(400).json("Error! " + err))
})

// Get all jobs from a persona
router.route('/:id').get((req,res) => {
    Job.find({persona: req.params.id})
        .then(job => res.json(job))
        .catch(err => res.status(400).json("Error! " + err))
})

// Create a new job
router.route('/').post((req,res) => {
    const newJob = new Job(req.body)

    newJob.save()
        .then(job => res.json(job))
        .catch(err => res.status(400).json("Error! " + err))
})

// Update a job
router.route('/:id').patch((req,res) => {
    Job.findByIdAndUpdate({_id: req.params.id} , req.body)
        .then(job => res.json(job))
        .catch(err => res.status(400).json("Error! " + err))
})

// Delete a job
router.route('/:id').delete( (req,res) => { 
    Job.deleteOne({_id: req.params.id})
        .then(res.json("Success! Job deleted"))
        .catch(err => res.status(400).json("Error! " + err))
})


module.exports = router