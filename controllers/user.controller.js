const User = require('../models/user.model')
const router = require('express').Router()

router.route('/').post((req,res) => {
  const newUser = new User(req.body)
    newNote.save()
        .then(note => res.json(note))
        .catch(err => res.status(400).json("Error! " + err))
})

module.exports = router