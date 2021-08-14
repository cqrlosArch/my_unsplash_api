const express = require('express');
const router = express.Router();

const {
  getImages,
  deleteImage,
  addImage,
} = require('../controllers/imageController.js');


router.get('/', getImages);
router.post('/', addImage);
router.delete('/:id', deleteImage);

module.exports = router;
