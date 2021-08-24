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

//Change _id=id, and delete __v,createdAt, updatedAt from response
imageSchema.set('toJSON', {
  transform: (doc, ret) => {
    ret.id=ret._id;
    delete ret._id;
    delete ret.__v;
    delete ret.createdAt;
    delete ret.updatedAt;
  },
});

module.exports = model('Image', imageSchema);
