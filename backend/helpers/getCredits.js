const axios = require('axios').default;

const getMovieCredits = async (id) => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=a810233f45bb4767b9a04b931179a085&language=en-US`
  );
};

module.exports = getMovieCredits;
