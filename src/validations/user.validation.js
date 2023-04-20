const { check } = require("express-validator");

const updateProfile = [
  // username
  check("username", "Username required").not().isEmpty(),
  check("username", "Username only can contains alphabet").isAlpha("en-US", {
    ignore: " ",
  }),
  check("username", "Username maximum length is 50 characters").isLength({
    max: 50,
  }),
  // phone
  check("phone", "Phone only can contains number").optional().isNumeric(),
  check("phone", "Phone minimun length is 10 and maximum length is 13 characters")
    .optional()
    .isLength({ min: 10, max: 13 }),
  // bio
  check("bio", "Bio maximum length is 500 characters")
    .optional()
    .isLength({ max: 500 }),
];

module.exports = {
  updateProfile,
};
