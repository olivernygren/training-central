import firebase from 'firebase/app';
import 'firebase/auth'; // If you're using Firebase Auth
import 'firebase/firestore'; // If you're using Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpk6lz2SqWapNm-7Mqa-f4DhgnGXbNNQo",
  authDomain: "training-central-app.firebaseapp.com",
  projectId: "training-central-app",
  storageBucket: "training-central-app.appspot.com",
  messagingSenderId: "925204716398",
  appId: "1:925204716398:web:73f6087936954200057f7f"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;