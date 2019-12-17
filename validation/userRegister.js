const Validator = require("validator")
const isEmpty = require("is-empty")
module.exports = function validateRegisterInput(data) {
  let errors = {}
  // Convert empty fields to an empty string so we can use validator functions
  data.firstName = !isEmpty(data.firstName) ? data.firstName : ""
  data.lastName = !isEmpty(data.lastName) ? data.lastName : ""
  data.email = !isEmpty(data.email) ? data.email : ""
  data.password = !isEmpty(data.password) ? data.password : ""
  data.password2 = !isEmpty(data.password2) ? data.password2 : ""
  // Name checks
  if (Validator.isEmpty(data.firstName)) {
    errors.firstName = "Prénom requis"
  }

  if (Validator.isEmpty(data.lastName)) {
    errors.lastName = "Nom requis"
  }
  // Email checks
  if (Validator.isEmpty(data.email)) {
    errors.email = "Mail requis"
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Mail invalide"
  }
  // Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = "Mot de passe requis"
  }
  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Confirmation du mot de passe requis"
  }
  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Le mot de passe doit contenir au moins 6 caractères"
  }
  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Les mots de passe doivent être identiques"
  }
  return {
    errors,
    isValid: isEmpty(errors)
  }
}
