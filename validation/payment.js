const Validator = require("validator")
const isEmpty = require("is-empty")

module.exports = function validatePaymentInput(data) {
  let errors = {}
  // Convert empty fields to an empty string so we can use validator functions
  data.cardNumber = !isEmpty(data.cardNumber) ? data.cardNumber : ""
  data.cardName = !isEmpty(data.cardName) ? data.cardName : ""
  data.expiryDate = !isEmpty(data.expiryDate) ? data.expiryDate : ""
  data.cvc = !isEmpty(data.cvc) ? data.cvc : ""
  // Email checks
  if (Validator.isEmpty(data.cardNumber)) {
    errors.cardNumber = "Numéro de carte requis"
  } else if (data.cardNumber.length !== 16) {
    errors.cardNumber = "Numéro de carte invalide"
  }

  if (Validator.isEmpty(data.cardName)) {
    errors.cardName = "Nom de porteur requis"
  }
  if (Validator.isEmpty(data.expiryDate)) {
    errors.expiryDate = "Date d'expiration requise"
  }
  //  else if (Validator.isAfter(data.expiryDate)) {
  //   errors.expiryDate = "Date invalide"
  // }
  if (Validator.isEmpty(data.cvc)) errors.cvc = "CVC requis"

  return {
    errors,
    isValid: isEmpty(errors)
  }
}
