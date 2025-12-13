const express = require('express');
const router = express.Router();
const { getGallery, uploadImage, deleteImage } = require('../controllers/galleryController');
const { protect } = require('../middleware/authMiddleware');
const upload = require('../middleware/multer');

router.get('/', getGallery);
router.post('/upload', protect, upload.single('image'), uploadImage);
router.delete('/:id', protect, deleteImage);

module.exports = router;
