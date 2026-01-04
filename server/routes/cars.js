const express = require('express');
const router = express.Router();
const { getCars, getCarById, createCar, updateCar, deleteCar } = require('../controllers/carController');
const { protect } = require('../middleware/authMiddleware');
const upload = require('../middleware/multer');

router.get('/', getCars);
router.get('/:id', getCarById);
router.post('/', protect, upload.array('images', 5), createCar);
router.put('/:id', protect, upload.array('images', 5), updateCar);
router.delete('/:id', protect, deleteCar);

module.exports = router;
