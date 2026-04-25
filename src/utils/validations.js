const validator = require("validator");

const validateSignupData = (req) => {
  const { firstName, lastName, emailId, password } = req.body;

  if (!firstName || !lastName) {
    throw new Error("First Name and Last Name are required");
  } else if (firstName.length < 4 || firstName.length > 50) {
    throw new Error("First Name should be between 4 and 50 characters");
  } else if (!validator.isEmail(emailId)) {
    throw new Error("Invalid Email Id");
  } else if (!validator.isStrongPassword(password)) {
    throw new Error("Password is not strong enough");
  }
};

module.exports = {
  validateSignupData,
};
