const mongoose = require('mongoose');

const { MONGODB_URI } = process.env;

console.log(MONGODB_URI);
const connectionDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log('Database connected');
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectionDB;
