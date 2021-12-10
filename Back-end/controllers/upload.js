const fs = require("fs")
const {promisify} = require("util")
const pipeline = promisify(require("stream").pipeline)

module.exports.uploadErrors = err => {
  let errors = {format: "", maxSize: ""}
  if (err.message.includes("Fichier invalide"))
    errors.format = "Format incompatible"
  if (err.message.includes("max size"))
    errors.maxSize = "Le fichier est trop volumineux (max : 500ko)"
  return errors
}
