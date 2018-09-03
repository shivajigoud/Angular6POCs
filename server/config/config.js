let env = process.env.NODE_ENV || 'development'

if (env === 'development') {
  process.env.PORT = 8080
  //process.env.MONGODB_URI = 'mongodb://localhost:27017/University'
  process.env.MONGODB_URI = 'mongodb://shivajigoud:shivaji#007@ds141902.mlab.com:41902/university'
} else if (env === 'test') {
  process.env.PORT = 8080
  process.env.MONGODB_URI = 'mongodb://localhost:27017/UniversityTest'
}