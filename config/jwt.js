const passportJWT = require('passport-jwt')
const ExactJwt = passportJWT.ExtractJwt

module.exports = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET || 'verysecret'
  
}
