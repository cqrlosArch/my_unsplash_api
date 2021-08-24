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
    },
  },
  {
    timestamps: true,
  }
);

imageSchema.set('toJSON', {
  transform: (_, ret) => {
    delete ret._id;
  },
});

module.exports = model('Image', imageSchema);
