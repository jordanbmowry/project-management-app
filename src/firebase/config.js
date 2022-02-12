import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
// Firebase configuration object
const firebaseConfig = {
  apiKey: process.env['REACT_APP_API-KEY'],
  authDomain: process.env['REACT_APP_AUTH-DOMAIN'],
  projectId: process.env['REACT_APP_PROJECT-ID'],
  storageBucket: process.env['REACT_APP_STORAGE-BUCKET'],
  messagingSenderId: process.env['REACT_APP_MESSAGING-SENDER-ID'],
  appId: process.env['REACT_APP_APP-ID'],
};

// initialize app
firebase.initializeApp(firebaseConfig);

// initialize services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

// timestamp
const timestamp = firebase.firestore.Timestamp;

// export firebase services
export { projectFirestore, projectAuth, timestamp, projectStorage };
