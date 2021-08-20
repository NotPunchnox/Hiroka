const express = require('express'),
userService = express(),
cors = require('cors'),
mongoose = require('mongoose')


require('dotenv').config()

userService.use(cors())
userService.use(express.json())

const {
    MONGO,
    PORT
} = process.env


mongoose.connect(MONGO, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false
}).then().catch(e => console.error(e))


mongoose.connection.once('open', () => console.log('Successfully connected to the auth database'))

const usersRoutes = require('./routes/usersRoutes')

userService.use('/', usersRoutes)

userService.listen(PORT, () => {
  console.log(`Auth service running on PORT: ${PORT}`)
})