const storage = require('../config/firebaseConfig');
const { ref, getDownloadURL } = require('firebase/storage');

const getURL = async () => {
  getDownloadURL(ref(storage, 'trailers/MeetTheParents_1597.mov')).then(
    (url) => {
      console.log(url);
    }
  );
};

module.exports = getURL;
