const express = require('express')
const app = express()
const stytch = require('stytch')
const cookieParser = require('cookie-parser');
require('dotenv').config()
const mongooseConnect = require('./mongoose')


app.use(cookieParser());
app.use(authenticateStytchSession);

const cors = require('cors')
app.use(cors())
app.options('*', cors());
app.options('/delete', function(req, res) {
    res.send(200);
});

app.use(express.json())

// STYTCH AUTHENTICATION
const stytchClient = new stytch.Client({
  project_id:process.env.STYTCH_PROJECT_ID,
  secret:process.env.STYTCH_SECRET,
  env:stytch.envs.test
});

const authenticateStytchSession = (req, res, next) => {
  return stytchClient.sessions.authenticate({
    session_token: req.cookies['stytch_session'],
  })
    .then(session => {
      req.stytchSession = session;
      return next();
    })
    .catch(next)
} ;

// DB connections
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Successfully server on port: ${PORT}.`)
 })

// API ROUTES
const personaRoutes = require('./controllers/persona.controller')
app.use('/personas', personaRoutes)

const jobRoutes = require('./controllers/job.controller')
app.use('/jobs', jobRoutes)

const noteRoutes = require('./controllers/note.controller')
app.use('/notes', noteRoutes)

const userRoutes = require('./controllers/user.controller')
app.use('/user', userRoutes)

