const mongoose = require('../config/database')
const passportLocalMonoose = require('Passport-local-mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
  email: { type: String, required: true},
  createdDate: { type: Date, default: Date.now },
  updatedDate: { type: Date, default: Date.now }
})

userSchema.pluging(passportLocalMongoose, { usernameField: 'email'})

module.exports = mognoose.model('user', userSchema)
