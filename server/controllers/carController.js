const Car = require('../models/Car');
const cloudinary = require('../config/cloudinary');
const fs = require('fs');

// @desc    Get all cars
// @route   GET /cars
// @access  Public
const getCars = async (req, res) => {
    try {
        const cars = await Car.find().sort({ createdAt: -1 });
        res.json(cars);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// @desc    Get single car
// @route   GET /cars/:id
// @access  Public
const getCarById = async (req, res) => {
    try {
        const car = await Car.findById(req.params.id);
        if (!car) {
            return res.status(404).json({ message: 'Car not found' });
        }
        res.json(car);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// @desc    Add new car
// @route   POST /cars
// @access  Private (Admin)
const createCar = async (req, res) => {
    try {
        const carData = req.body;
        
        // Parse features if sent as string (from FormData)
        if (typeof carData.features === 'string') {
            try {
                // If it's a JSON string, parse it, otherwise split by comma if appropriate or wrap in array
                 carData.features = JSON.parse(carData.features);
            } catch (e) {
                // Fallback: if not valid JSON, maybe just split by comma or treat as single item array if not empty
                carData.features = carData.features ? [carData.features] : [];
            }
        }

        const images = [];
        if (req.files && req.files.length > 0) {
            for (const file of req.files) {
                try {
                    const result = await cloudinary.uploader.upload(file.path, {
                        folder: 'car-dealership-cars'
                    });
                    images.push({
                        url: result.secure_url,
                        publicId: result.public_id
                    });
                     // Remove file from local storage
                     fs.unlinkSync(file.path);
                } catch (uploadError) {
                    console.error('Image Upload Error:', uploadError);
                     if (fs.existsSync(file.path)) {
                        fs.unlinkSync(file.path);
                    }
                }
            }
        }

        const newCar = await Car.create({
            ...carData,
            images
        });

        res.status(201).json(newCar);
    } catch (error) {
        console.error('Create Car Error:', error);
        res.status(500).json({ message: 'Failed to create car', error: error.message });
    }
};

// @desc    Update car
// @route   PUT /cars/:id
// @access  Private (Admin)
const updateCar = async (req, res) => {
    try {
        const car = await Car.findById(req.params.id);
        if (!car) {
            return res.status(404).json({ message: 'Car not found' });
        }

        // Handle text data updates
        const updateData = { ...req.body };
         
         // Parse features if sent as string
         if (typeof updateData.features === 'string') {
             try {
                 updateData.features = JSON.parse(updateData.features);
             } catch (e) {
                  updateData.features = updateData.features ? [updateData.features] : [];
             }
         }

        // Handle Image Deletions (if imagesToDelete is passed - optional, advanced feature but good to have)
        // For now, let's keep it simple: If new images are uploaded, append them? Or replace? 
        // User request is "max upload to be 5". 
        // Let's assume we append new images, and check limit. 
        // OR better: client handles sending "existing images" + "new files".
        // For simplicity in this iteration: We just append new images if any are uploaded. 
        // Deletion of specific images might be a separate API or handled via update logic.
        
        let currentImages = car.images;
        
        // Check if there's a request to remove specific images (passed as publicIds in body)
        // This is a common pattern: body.imagesToRemove = [publicId1, publicId2]
        if (req.body.imagesToRemove) {
             const imagesToRemove = JSON.parse(req.body.imagesToRemove);
             // Filter out images and delete from cloudinary
             for(const publicId of imagesToRemove) {
                await cloudinary.uploader.destroy(publicId);
             }
             currentImages = currentImages.filter(img => !imagesToRemove.includes(img.publicId));
        }

        // Handle new images
        if (req.files && req.files.length > 0) {
            // Check limit
            if (currentImages.length + req.files.length > 5) {
                 // Cleanup uploaded files immediately
                 req.files.forEach(f => fs.existsSync(f.path) && fs.unlinkSync(f.path));
                 return res.status(400).json({ message: 'Cannot exceed 5 images total per car.' });
            }

            for (const file of req.files) {
                 try {
                    const result = await cloudinary.uploader.upload(file.path, {
                        folder: 'car-dealership-cars'
                    });
                    currentImages.push({
                        url: result.secure_url,
                        publicId: result.public_id
                    });
                    fs.unlinkSync(file.path);
                } catch (uploadError) {
                    console.error(uploadError);
                     if (fs.existsSync(file.path)) fs.unlinkSync(file.path);
                }
            }
        }

        updateData.images = currentImages;
        delete updateData.imagesToRemove; // Cleanup

        const updatedCar = await Car.findByIdAndUpdate(req.params.id, updateData, { new: true });
        res.json(updatedCar);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

// @desc    Delete car
// @route   DELETE /cars/:id
// @access  Private (Admin)
const deleteCar = async (req, res) => {
    try {
        const car = await Car.findById(req.params.id);
        if (!car) {
            return res.status(404).json({ message: 'Car not found' });
        }

        // Delete images from Cloudinary
        for (const image of car.images) {
            await cloudinary.uploader.destroy(image.publicId);
        }

        await Car.findByIdAndDelete(req.params.id);
        res.json({ message: 'Car removed' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = { getCars, getCarById, createCar, updateCar, deleteCar };
