// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {initializeAuth, getReactNativePersistence} from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDhh3eqwdTKeunxZlPmOUGXSmbKaJvtRm8',
  authDomain: 'money-tracker-ee1bd.firebaseapp.com',
  databaseURL: 'https://money-tracker-ee1bd-default-rtdb.firebaseio.com',
  projectId: 'money-tracker-ee1bd',
  storageBucket: 'money-tracker-ee1bd.firebasestorage.app',
  messagingSenderId: '12087493102',
  databaseURL: 'https://money-tracker-e1bd-default-rtdb.firebaseio.com/',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export default app;
