const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`${process.env.MONGODB}`, ()=> {
  console.log('connected to mongodb')
})
