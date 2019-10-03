import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAzh3znz0buycHySD4gebcmucca7OGqy7s',
  authDomain: 'catarse-2a1f0.firebaseapp.com',
  databaseURL: 'https://catarse-2a1f0.firebaseio.com',
  projectId: 'catarse-2a1f0',
  storageBucket: 'catarse-2a1f0.appspot.com',
  messagingSenderId: '359221953205',
  appId: '1:359221953205:web:6a7480a9feefe0bf77b4fc',
};
// Initialize Firebase
const Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase;
