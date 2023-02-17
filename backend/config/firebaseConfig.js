// Import the functions you need from the SDKs you need
const { initializeApp } = require('firebase/app');
const { getStorage } = require('firebase/storage');

// My Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDRHflqHaW1Ky6lStRxQociPIo6rQ-lZCs',
  authDomain: 'mean-stack-problem.firebaseapp.com',
  projectId: 'mean-stack-problem',
  storageBucket: 'mean-stack-problem.appspot.com',
  messagingSenderId: '997676365409',
  appId: '1:997676365409:web:4f0b98117c025d7ee55c20',
};

// Init Firebase
const app = initializeApp(firebaseConfig);
// Init storage
const fbStorage = getStorage(app);

module.exports = fbStorage;
