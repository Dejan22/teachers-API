const passport => require('passport')
const mongoose = require('mongoose')
const passportJWT = require('passport-jwt')
const { User } = require('./models')
const jwtOptions = require('./jwt')

const JwtStrategy = passportJWT.strategy
const tokenStrategy = new JwtStrategy(jwtOptions, (jwtPayload, done)) => {
  const user = user.findbyId(jwtPayload.id)
    .then((user) => {
      if (user) {
        done(null, user)
      } else {
        done(null, false)
      }
    })
    .catch((err) => done(err.false))
})

passport.use(User.createStrategy())
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializer())
passport.use(tokenStrategy)

module.exports = passport
