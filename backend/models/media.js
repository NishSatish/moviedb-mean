const mongoose = require('mongoose');

const mediaSchema = mongoose.Schema({
  movie_id: { type: Number, required: true, unique: true },
  image: { type: String, required: true },
  trailer: { type: String, required: true },
});

module.exports = mongoose.model('Media', mediaSchema);
