require('dotenv').config()

const source= process.env.ATLAS_CONNECTION
const mongoose = require('mongoose')
const { config } = require('dotenv')
mongoose.connect(source, {
})

const connection = mongoose.connection
connection.once('open', () => {
    console.log("DB connected.");
})

exports.connection