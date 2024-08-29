const mongoose = require('mongoose');

const connectToMongoose = async (url)=>{
  return mongoose.connect(url);
}

module.exports = connectToMongoose;
