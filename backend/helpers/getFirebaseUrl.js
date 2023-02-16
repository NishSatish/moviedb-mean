const storage = require('../config/firebaseConfig');
const { ref, getDownloadURL } = require('firebase/storage');

const getURL = async () => {
  getDownloadURL(ref(storage, 'images/NISHANT_compr.jpg')).then((url) => {
    console.log(url);
  });
};

module.exports = getURL;
