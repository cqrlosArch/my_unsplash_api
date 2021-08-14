const { Schema, model } = require('mongoose');

const imageSchema = new Schema(
  {
    url: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    label: {
      type: String,
      required: true,
      trim: true,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = model('Image', imageSchema);
