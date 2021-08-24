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

//Delete _id from response
imageSchema.set('toJSON', {
  transform: (doc, ret) => {
    delete ret._id;
  },
});

module.exports = model('Image', imageSchema);
