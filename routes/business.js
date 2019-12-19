const router = require("express").Router()
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const keys = require("../config/keys")

const validateBusinessRegistrationInput = require("../validation/businessRegister")
const validateLoginInput = require("../validation/login")

let Business = require("../models/business.model")
let User = require("../models/user.model")

router.post("/find", (req, res) => {
  Business.findById(req.body.id)
    .then(business =>
      !business
        ? res
            .status(404)
            .json({ error: `No business found for id : ${req.body.id}` })
        : res.json(business)
    )
    .catch(err => res.status(400).json(err))
})

router.get("/find/all", (req, res) => {
  Business.find()
    .then(business => res.json(business))
    .catch(err => res.status(404).json(err))
})

router.post("/register", (req, res) => {
  const { errors, isValid } = validateBusinessRegistrationInput(req.body)
  if (!isValid) return res.status(400).json(errors)

  Business.findOne({ email: req.body.email }).then(business => {
    if (business) return res.status(400).json({ email: "email already taken" })
    User.findOne({ email: req.body.email }).then(user => {
      if (user) return res.status(400).json({ email: "email already taken" })
      const newBusiness = new Business({
        email: req.body.email,
        name: req.body.name,
        password: req.body.password,
        phoneNumber: req.body.phoneNumber,
        type: req.body.type
      })
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newBusiness.password, salt, (err, hash) => {
          if (err) throw err
          newBusiness.password = hash
          newBusiness
            .save()
            .then(business => {
              res.json(business)
            })
            .catch(err => console.log(err))
        })
      })
    })
  })
})

router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body)
  if (!isValid) return res.status(400).json(errors)

  const email = req.body.email
  const password = req.body.password

  Business.findOne({ email }).then(business => {
    if (!business)
      return res.status(404).json({ emailNotFound: "email not found" })

    bcrypt.compare(password, business.password).then(isMatch => {
      if (!isMatch)
        return res.status(400).json({ passwordIncorrect: "password incorrect" })

      const payload = {
        id: business.id,
        firstName: business.firstName
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

router.post("/search", (req, res) => {
  let { query, resultsNumber } = req.body
  resultsNumber = resultsNumber ? resultsNumber : 10
  Business.find(
    { $text: { $search: query, $language: "fr" } },
    { score: { $meta: "textScore" } }
  )
    .sort({ score: { $meta: "textScore" } })
    .limit(resultsNumber)
    .then(data => res.json(data))
    .catch(err => res.status(400).json(err))
})

router.post("/find/type", (req, res) => {
  const { type } = req.body
  Business.find({ type })
    .then(business => res.json(business))
    .catch(err => res.status(404).json(err))
})

module.exports = router
