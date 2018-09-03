require('./config/config')

const _ = require('lodash')
const express = require('express')
const bodyParser = require('body-parser')
const {ObjectId} = require('mongodb')

const {mongoose} = require('./db/mongoose')

const countryRouter = require('./routes/country')
const stateRouter = require('./routes/state')
const cityRouter = require('./routes/city')
const collegeRouter = require('./routes/college')
const hostelRouter = require('./routes/hostel')
const studentRouter = require('./routes/student')

const app = express()
const port = process.env.PORT || 8080

//app.use(bodyParser.json())
app.use(bodyParser.json({limit: '10mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}))
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
  next();
});
// Enter your code below this line.
app.use('/country',countryRouter)
app.use('/state',stateRouter)
app.use('/city',cityRouter)
app.use('/hostels',hostelRouter)
app.use('/hostel',hostelRouter)
app.use('/college',collegeRouter)
app.use('/colleges',collegeRouter)
app.use('/students',studentRouter)
app.use('/student',studentRouter)

app.listen(port, () => {
  console.log(`Starting on port ${port}`)
})

module.exports = { app }