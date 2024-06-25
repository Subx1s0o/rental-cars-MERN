import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCpd44DZ3sUbsYs9UfcPbTd3RMjnaKd3eE",
//   authDomain: "rental-cars-a567c.firebaseapp.com",
//   projectId: "rental-cars-a567c",
//   storageBucket: "rental-cars-a567c.appspot.com",
//   messagingSenderId: "981959471520",
//   appId: "1:981959471520:web:6eabb6e32fd02a7d96b4c5",
//   measurementId: "G-QSNB5KQ3FJ"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
