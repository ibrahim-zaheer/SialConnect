// backend/config/multerConfig.js
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('./cloudinaryConfig');

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'profile_pictures', // Cloudinary folder name
    allowed_formats: ['jpg', 'png', 'jpeg'], // Allowed file types
  },
});

const upload = multer({ storage });

module.exports = upload;
