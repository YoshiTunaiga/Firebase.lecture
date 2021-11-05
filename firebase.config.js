import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC0ZfqHW3ZrkREh_xwa8ugKExh8zn37UD4",
  authDomain: "fir-temp-c0ac7.firebaseapp.com",
  databaseURL: "https://fir-temp-c0ac7-default-rtdb.firebaseio.com",
  projectId: "fir-temp-c0ac7",
  storageBucket: "fir-temp-c0ac7.appspot.com",
  messagingSenderId: "1004053320169",
  appId: "1:1004053320169:web:d92c017c9bf69fdbd37b78",
  measurementId: "G-R8WHNQKK7M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default getDatabase();
