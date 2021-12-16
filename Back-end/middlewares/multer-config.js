const multer = require("multer")

const MIME_TYPES = {
  // Dictionnaire d'extensions
  "image/jpg": "jpg",
  "image/jpeg": "jpeg",
  "image/png": "png",
  "image.gif": "gif",
  "image.webp": "webp",
}

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    // destination des images
    callback(null, "./upload")
  },
  filename: (req, file, callback) => {
    // nouveau nom du fichier image
    const name = file.originalname.replace(/\.[^/.]+$/, "")
    const extension = MIME_TYPES[file.mimetype]
    callback(null, name + Date.now() + "." + extension)
  },
})
module.exports = multer({storage: storage}).single("file") // stockage de l'image publiée
