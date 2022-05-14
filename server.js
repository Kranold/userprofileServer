const express = require('express')
const app = express()
require('dotenv').config()

const cors = require('cors')


app.use(cors())

app.options('*', cors());
app.options('/delete', function(req, res) {
    res.send(200);
});

app.use(express.json())

const source= process.env.ATLAS_CONNECTION
const mongoose = require('mongoose')
const { config } = require('dotenv')
mongoose.connect(source, {
})

const connection = mongoose.connection
connection.once('open', () => {
    console.log("DB connected.");
})

const PORT = process.env.PORT || 7012
console.log(PORT)
app.listen(PORT, () => {
    console.log(`Successfully server on port: ${PORT}.`)
 })

 const personaRoutes = require('./controllers/persona.controller')
 app.use('/personas', personaRoutes)

 const jobRoutes = require('./controllers/job.controller')
 app.use('/jobs', jobRoutes)

 const noteRoutes = require('./controllers/note.controller')
 app.use('/notes', noteRoutes)

