const mongoose = require('mongoose')
require("dotenv").config();
const mongoURI = process.env.MONGODB_URI;

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Successfuly connected with mongodb");
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

 module.exports = connectToMongo