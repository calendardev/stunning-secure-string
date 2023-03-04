const crypto = require("crypto");

module.exports.secureString = (prefix = "", byteSize = 74) => {
  const randomString = crypto
    .randomBytes(byteSize)
    .toString("base64url")
    .replace(/[^0-9a-z]/gi, "");
  return prefix === "" ? randomString : `${prefix}_${randomString}`; 
}