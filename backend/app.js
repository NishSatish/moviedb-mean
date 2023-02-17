const express = require('express');
const getURL = require('./helpers/getFirebaseUrl');
const connectDB = require('./config/mongooseConfig');
const MoviesController = require('./controllers/moviesController');
// const seedDummyData = require('./helpers/seedData');

const app = express();
connectDB()
  .then((_) => {
    console.log('database connection success');
  })
  .catch((e) => e);

// Imitation game: 205596
// Inside Man: 388
// The Irishman: 398978
// Meet The Parents: 1597

// SEED DUMMY DATA IN THE DATABASE
// seedDummyData();

app.use('/getFileURL', async (req, res) => {
  //Only for the sake of getting the URL to add it in the database,
  // in reality we can just use Firebase directly instead of using a DB
  getURL();
});

app.use('/getMovies', MoviesController.getMovies);

app.use('/getMoviePopupDetails/:id', MoviesController.getMoviePopupDetails);

app.use('/getCompleteMovie/:id', MoviesController.getCompleteMovie);

app.listen(3001);
