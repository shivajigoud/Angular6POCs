require('./server/config/config')

const _ = require('lodash')
const express = require('express')
const bodyParser = require('body-parser')
const {ObjectId} = require('mongodb')

const {mongoose} = require('./server/db/mongoose')

const countryRouter = require('./server/routes/country')
const stateRouter = require('./server/routes/state')
const cityRouter = require('./server/routes/city')
const collegeRouter = require('./server/routes/college')
const hostelRouter = require('./server/routes/hostel')
const studentRouter = require('./server/routes/student')

const app = express()
const port = process.env.PORT || 8080

//app.use(bodyParser.json())
app.use(bodyParser.json({limit: '10mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}))
// Create link to Angular build directory
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
  next();
});
// Enter your code below this line.
app.use('/api/country',countryRouter)
app.use('/api/state',stateRouter)
app.use('/api/city',cityRouter)
app.use('/api/hostels',hostelRouter)
app.use('/api/hostel',hostelRouter)
app.use('/api/college',collegeRouter)
app.use('/api/colleges',collegeRouter)
app.use('/api/students',studentRouter)
app.use('/api/student',studentRouter)

app.listen(port, () => {
  console.log(`Starting on port ${port}`)
})

module.exports = { app }