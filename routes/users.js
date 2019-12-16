const router = require("express").Router()
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const keys = require("../config/keys")

const validateUserRegistrationInput = require("../validation/userRegister")
const validateLoginInput = require("../validation/login")

let User = require("../models/user.model")

router.post("/find", (req, res) => {
  User.findById(req.body.id)
    .then(user => {
      if (!user) {
        res.status(404).json({ error: `No user found for id : ${req.body.id}` })
      } else {
        console.log("user sent")
        res.json(user)
      }
    })
    .catch(err => res.status(400).json(err))
})

router.post("/register", (req, res) => {
  const { errors, isValid } = validateUserRegistrationInput(req.body)
  if (!isValid) {
    return res.status(400).json(errors)
  }

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ error: "email already taken" })
    }
    const newUser = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: req.body.password,
      email: req.body.email
    })

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err
        newUser.password = hash
        newUser
          .save()
          .then(user => res.json(user))
          .catch(err => console.log(err))
      })
    })
  })
})

router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body)
  if (!isValid) return res.status(400).json(errors)

  const email = req.body.email
  const password = req.body.password

  User.findOne({ email }).then(user => {
    if (!user) return res.status(404).json({ emailNotFound: "email not found" })

    bcrypt.compare(password, user.password).then(isMatch => {
      if (!isMatch)
        return res.status(400).json({ passwordIncorrect: "password incorrect" })

      const payload = {
        id: user.id,
        firstName: user.firstName
      }

      jwt.sign(
        payload,
        keys.secretOrKey,
        { expiresIn: 38000 },
        (err, token) => {
          res.json({
            success: true,
            token: "Bearer " + token
          })
        }
      )
    })
  })
})

module.exports = router
