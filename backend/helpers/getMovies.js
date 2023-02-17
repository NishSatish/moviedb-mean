const axios = require('axios').default;
const Media = require('../models/media');

const getAMovie = async (id) => {
  const res = await Media.findOne({
    movie_id: id,
  });
  const image = res.image;
  // console.log(image);
  const trailer = res.trailer;
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=a810233f45bb4767b9a04b931179a085&language=en-US`
  );
  return { response, trailer, image };
};

module.exports = getAMovie;
