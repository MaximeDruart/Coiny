const Validator = require("validator")
const isEmpty = require("is-empty")

module.exports = data => {
  let errors = {}

  // validator fn requires strings
  data.name = !isEmpty(data.name) ? data.name : ""
  data.phoneNumber = !isEmpty(data.phoneNumber) ? data.phoneNumber : ""
  data.email = !isEmpty(data.email) ? data.email : ""
  data.password = !isEmpty(data.password) ? data.password : ""
  data.password2 = !isEmpty(data.password2) ? data.password2 : ""
  data.googleMapsLink = !isEmpty(data.googleMapsLink) ? data.googleMapsLink : ""

  if (Validator.isEmpty(data.phoneNumber)) {
    errors.phoneNumber = "Numéro de téléphone requis"
  } else if (!Validator.isMobilePhone(data.phoneNumber)) {
    errors.phoneNumber = "Numéro de téléphone invalide"
  }

  if (Validator.isEmpty(data.name)) errors.name = "Nom requis"

  if (Validator.isEmpty(data.phoneNumber)) {
    errors.phoneNumber = "Numéro de téléphone requis"
  } else if (!Validator.isMobilePhone(data.phoneNumber)) {
    errors.phoneNumber = "Numéro de téléphone invalide"
  }
  if (Validator.isEmpty(data.email)) {
    errors.email = "Mail requis"
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Mail invalide"
  }

  if (Validator.isEmpty(data.password)) errors.password = "Mot de passe requis"
  if (Validator.isEmpty(data.password2))
    errors.password2 = "Confirmation du mot de passe requis"
  if (!Validator.isLength(data.password, { min: 6, max: 30 }))
    errors.password = "Le mot de passe doit contenir au moins 6 caractères"
  if (!Validator.equals(data.password, data.password2))
    errors.password2 = "Les mots de passe doivent être identiques"

  return {
    errors,
    isValid: isEmpty(errors)
  }
}
