const JwtStrategy = require("passport-jwt").Strategy
const ExtractJwt = require("passport-jwt").ExtractJwt

const mongoose = require("mongoose")
const Business = require('../models/business.model')
const keys = require("../config/keys")

const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
opts.secretOrKey = keys.secretOrKey

module.exports = passport => {
    passport.use(
        new JwtStrategy(opts, (jwt_payload, done) => {
            Business.findById(jwt_payload.id)
                .then(business => {
                    if (business) return done(null, user)
                    return done(null, false)
                })
                .catch(err => console.log(err))
        })
    )
}