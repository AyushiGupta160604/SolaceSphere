const mongoose = require('mongoose');
mongoose.connect("mongodb://0.0.0.0:27017/login" ,{
  }).then(() => {
  console.log(`Connection successful`);
}).catch((err) => {
  console.error(`Connection error: ${err}`);
});

module.exports = mongoose.connection;