const mongoose = require('mongoose');
const connectDB = () => {
  return mongoose.connect(
    'mongodb+srv://nishsatish:1234@cluster0.t1fm6zq.mongodb.net/movies?retryWrites=true&w=majority'
  );
};
module.exports = connectDB;
