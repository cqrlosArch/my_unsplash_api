const mongoose = require('mongoose');

const {NOTES_APP_MONGODB_HOST, NOTES_APP_MONGODB_DATABASE} = process.env

const MONGODB_URI=`mongodb://${NOTES_APP_MONGODB_HOST}/${NOTES_APP_MONGODB_DATABASE}`

console.log(MONGODB_URI);
const connectionDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
    console.log('Database connected');
  } catch (error) {
    console.log(error);
  }
};

module.exports =connectionDB;
