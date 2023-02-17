const mongoose = require('mongoose');
const Media = require('../models/media');

const seedDummyData = async () => {
  // Inside Man
  const m1 = new Media({
    movie_id: 388,
    image:
      'https://firebasestorage.googleapis.com/v0/b/mean-stack-problem.appspot.com/o/images%2FInsideMan_388.jpeg?alt=media&token=2775cab0-03c4-4a1e-b296-02d1a4014811',
    trailer:
      'https://firebasestorage.googleapis.com/v0/b/mean-stack-problem.appspot.com/o/trailers%2FInsideMan_388.mov?alt=media&token=ddbbcf33-d9fb-482d-86dd-5a4e8bf62d54',
  });
  await m1.save();

  // The Irishman
  const m2 = new Media({
    movie_id: 398978,
    image:
      'https://firebasestorage.googleapis.com/v0/b/mean-stack-problem.appspot.com/o/images%2FTheIrishman_398978.jpg?alt=media&token=6c65b1d8-2f25-42d8-8953-69e6a746a3aa',
    trailer:
      'https://firebasestorage.googleapis.com/v0/b/mean-stack-problem.appspot.com/o/trailers%2FTheIrishman_398978.mov?alt=media&token=3263ecdd-f312-4d12-b8b7-e070e5b54b5f',
  });
  await m2.save();

  // Meet The Parents
  const m3 = new Media({
    movie_id: 1597,
    image:
      'https://firebasestorage.googleapis.com/v0/b/mean-stack-problem.appspot.com/o/images%2FMeetTheParents_1597.jpeg?alt=media&token=488019ae-e25c-4822-ac4e-3cf47ea069a5',
    trailer:
      'https://firebasestorage.googleapis.com/v0/b/mean-stack-problem.appspot.com/o/trailers%2FMeetTheParents_1597.mov?alt=media&token=5c11f96b-c6ee-4d65-85a9-57a35f9f8c80',
  });
  await m3.save();

  // The Imitation Game
  const m4 = new Media({
    movie_id: 205596,
    image:
      'https://firebasestorage.googleapis.com/v0/b/mean-stack-problem.appspot.com/o/images%2FTheImitationGame_205596.jpeg?alt=media&token=b7cd5352-c3e0-4323-88f6-e5b248f9f4f4',
    trailer:
      'https://firebasestorage.googleapis.com/v0/b/mean-stack-problem.appspot.com/o/trailers%2FTheImitationGame_205596.mov?alt=media&token=3ec0aa43-9a9c-4d68-a4fb-f39d5da925cc',
  });
  await m4.save();
};

module.exports = seedDummyData;
