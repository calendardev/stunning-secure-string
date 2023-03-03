const crypto = require("crypto");

module.exports = function(size = 74) {
  return crypto
    .randomBytes(size)
    .toString("base64url")
    .replace(/[^0-9a-z]/gi, "");
  }