const Image = require('../model/Image.js');
const connectionDB = require('../database');

async function getImages(req, res) {
  await connectionDB();
  const images = await Image.find();
  res.status(200).send({ images });
}

async function addImage(req, res) {
  await connectionDB();

  try {
    const { url, label } = req.body;

    const newImage = Image({ url, label });
    await newImage.save();
    res.status(201).json({
      state: true,
      code: 201,
      message: 'Created',
    });
  } catch (error) {
   
    res.json({
      state: false,
      code: 400,
      message:
        error._message === 'Image validation failed'
          ? 'Validation failed'
          : 'An error has ocurred',
    });
  }
}

async function deleteImage(req, res) {
  await connectionDB();
  const _id = req.params.id;

  Image.findByIdAndDelete({ _id })
    .then((result) => {
      if (result) {
        res.status(200).json({
          state: true,
          message: 'Deleted',
        });
      } else {
        res.status(400).json({
          state: false,
          message: 'Fail delete',
        });
      }
    })
    .catch((error) => console.error(error));
}

module.exports = {
  getImages,
  deleteImage,
  addImage,
};
