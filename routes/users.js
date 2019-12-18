const router = require("express").Router()
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const keys = require("../config/keys")

const validateUserRegistrationInput = require("../validation/userRegister")
const validateLoginInput = require("../validation/login")

let User = require("../models/user.model")
let Business = require("../models/business.model")

router.post("/find", (req, res) => {
  User.findById(req.body.id)
    .then(user => res.json(user))
    .catch(err =>
      res.status(404).json({ error: `No user found for id : ${req.body.id}` })
    )
})

router.get("/find/all", (req, res) => {
  User.find()
    .then(user => res.json(user))
    .catch(err => res.status(404).json(err))
})

router.post("/register", (req, res) => {
  const { errors, isValid } = validateUserRegistrationInput(req.body)
  if (!isValid) return res.status(400).json(errors)

  User.findOne({ email: req.body.email }).then(user => {
    if (user) return res.status(400).json({ error: "email already taken" })
    Business.findOne({ email: req.body.email }).then(business => {
      if (business)
        return res.status(400).json({ error: "email already taken" })
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
            .catch(err => res.json(err))
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

router.post("/donate", (req, res) => {
  let { user, donationData } = req.body
  let userIsValid = true,
    businessIsValid = true

  User.findById(user.id)
    .catch(err => {
      userIsValid = false
      return res
        .status(404)
        .json({ error: `No user found for id : ${user.id}` })
    })
    .then(() => {
      Business.findById(donationData.target)
        .catch(err => {
          businessIsValid = false
          return res.status(404).json({
            error: `No business found for id : ${donationData.target}`
          })
        })
        .then(() => {
          userIsValid &&
            User.findOneAndUpdate(
              { _id: user.id },
              {
                // equal to totalAmountPledged += donationData.amount
                $inc: { totalAmountPledged: donationData.amount },
                // equal to donationHistory.push(donationData)
                $push: { donationHistory: donationData }
              },
              { new: true }
            )
              .catch(err => res.status(400).json(err))
              .then(() => {
                businessIsValid &&
                  Business.findOneAndUpdate(
                    { _id: donationData.target },
                    {
                      $inc: { moneyAllocated: donationData.amount },
                      $push: { contributors: user.id }
                    },
                    { new: true }
                  )
                    .then(businessResponse => res.json(businessResponse))
                    .catch(err => res.status(400).json(err))
              })
        })
    })
})

router.post("/accessprivilege", (req, res) => {
  // no actual file checking
  let userIsValid = true
  const { id } = req.body
  User.findById(id)
    .catch(err => {
      userIsValid = false
      return res.status(404).json({ error: `No user found for id : ${id}` })
    })
    .then(() => {
      User.findOneAndUpdate(
        { _id: id },
        { $set: { receiverStatus: true } },
        { new: true }
      )
        .then(user => res.json(user))
        .catch(err => res.status(400).json(err))
    })
})

module.exports = router
