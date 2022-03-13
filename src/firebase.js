import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";
import { getDatabase,set,ref,onValue } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyBsbq-k06L0MycYjKml00svARqBUaLbAvU",
    authDomain: "idonate-signup.firebaseapp.com",
    projectId: "idonate-signup",
    storageBucket: "idonate-signup.appspot.com",
    messagingSenderId: "614433531115",
    appId: "1:614433531115:web:db6265568b75b7bf2b0aae"
  };

  const app = initializeApp(firebaseConfig);
  let database= getDatabase(app);

  export { database,set,ref,onValue };