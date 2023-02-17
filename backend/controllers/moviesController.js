const movieList = require('../helpers/getMovies');
const creditsList = require('../helpers/getCredits');
const Media = require('../models/media');

module.exports = {
  getMovies: async (req, res) => {
    const m1 = (await movieList(205596)).response.data;
    const m2 = (await movieList(388)).response.data;
    const m3 = (await movieList(398978)).response.data;
    const m4 = (await movieList(1597)).response.data;

    // We only need movie names for the home page
    const movies = await Promise.all(
      [m1, m2, m3, m4].map(async (movie) => {
        return {
          id: movie.id,
          name: movie.original_title,
          image: (await movieList(movie.id)).image,
          trailer: (await movieList(movie.id)).trailer,
        };
      })
    );
    res.status(200).json(movies);
  },

  getMoviePopupDetails: async (req, res) => {
    const movie = (await movieList(req.params.id)).response.data;
    const image = (await movieList(req.params.id)).image;
    const reqdMovieDetails = {
      id: movie.id,
      name: movie.original_title,
      year: movie.release_date.slice(0, 4),
      duration: movie.runtime,
      description: movie.overview,
      image,
    };
    res.status(200).json(reqdMovieDetails);
  },

  getCompleteMovie: async (req, res) => {
    const movie = (await movieList(req.params.id)).response.data;
    const crewMembers = (await creditsList(req.params.id)).data;
    const trailer = (await movieList(req.params.id)).trailer;

    const actors = crewMembers.cast.map((crewMember) => {
      if (crewMember.known_for_department == 'Acting') {
        return crewMember.original_name;
      }
    });

    const director = crewMembers.crew
      .map((crewMember) => {
        if (crewMember.job == 'Director') {
          return crewMember.original_name;
        }
      })
      .filter((d) => d); // To remove null values

    const reqdMovieDetails = {
      id: movie.id,
      name: movie.original_title,
      year: movie.release_date.slice(0, 4),
      duration: movie.runtime,
      description: movie.overview,
      actors: actors.splice(0, 3),
      director,
      trailer,
    };

    res.status(200).json(reqdMovieDetails);
  },
};
