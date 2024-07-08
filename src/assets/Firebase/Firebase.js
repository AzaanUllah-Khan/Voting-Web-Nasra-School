import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyAjo_rlqi6WBtUilCApLBKCgajQw0EKKI4",
  authDomain: "school-voting-652eb.firebaseapp.com",
  projectId: "school-voting-652eb",
  storageBucket: "school-voting-652eb.appspot.com",
  messagingSenderId: "685105086692",
  appId: "1:685105086692:web:e494fd5ccbd81bdb2e2cf1",
  measurementId: "G-6CCTKLD44S"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);