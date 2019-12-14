const Validator = require('validator')
const isEmpty = require('is-empty')

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
        errors.phoneNumber = "Phone number field is required"
    } else if (!Validator.isMobilePhone(data.phoneNumber)) {
        errors.phoneNumber = "Phone number is invalid"
    }
    if (Validator.isEmpty(data.name)) errors.name = "Name field is required"
    
    if (Validator.isEmpty(data.phoneNumber)) {
        errors.phoneNumber = "Phone number field is required"
    } else if (!Validator.isMobilePhone(data.phoneNumber)) {
        errors.phoneNumber = "Phone number is invalid"
    }
    if (Validator.isEmpty(data.email)) {
        errors.email = "Email field is required"
    } else if (!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid"
    }
    
    if (Validator.isEmpty(data.password)) errors.password = "Password field is required"    
    if (Validator.isEmpty(data.password2)) errors.password2 = "Confirm password field is required"    
    if (!Validator.isLength(data.password, {min: 6,max: 30})) errors.password = "Password must be at least 6 characters"     
    if (!Validator.equals(data.password, data.password2)) errors.password2 = "Passwords must match"
        
    
    return {
        errors,
        isValid: isEmpty(errors)
    }
}