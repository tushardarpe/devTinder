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

const validateEditProfileData = (req) => {
  const allowedEditFields = [
    "firstName",
    "lastName",
    "age",
    "gender",
    "photoUrl",
    "about",
    "skills",
  ];

  const isEditAllowed = Object.keys(req.body).every((key) =>
    allowedEditFields.includes(key),
  );
  return isEditAllowed;
};

const validateCurrentAndNewPassword = (req) => {
  const { currentPassword, newPassword, confirmNewPassword } = req.body;
  if (!currentPassword || !newPassword || !confirmNewPassword) {
    throw new Error(
      "Current Password, New Password and Confirm New Password are required",
    );
  } else if (
    typeof currentPassword !== "string" ||
    typeof newPassword !== "string" ||
    typeof confirmNewPassword !== "string"
  ) {
    throw new Error("Passwords must be strings");
  } else if (!validator.isStrongPassword(newPassword)) {
    throw new Error("New Password is not strong enough");
  } else if (newPassword !== confirmNewPassword) {
    throw new Error("New Password and Confirm New Password do not match");
  } else if (currentPassword === newPassword) {
    throw new Error("Current Password and New Password cannot be the same");
  }
};

module.exports = {
  validateSignupData,
  validateEditProfileData,
  validateCurrentAndNewPassword,
};
