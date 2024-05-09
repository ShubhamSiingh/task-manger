import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth" ;

const firebaseConfig = {
    apiKey: "AIzaSyCKvcHzMTTXRNg_0wJ_lVus347gO4K-0WA",
    authDomain: "task-manager-9beea.firebaseapp.com",
    projectId: "task-manager-9beea",
    storageBucket: "task-manager-9beea.appspot.com",
    messagingSenderId: "336663326219",
    appId: "1:336663326219:web:72f96e609504929178e10e",
    measurementId: "G-2GTH8RQ4VF"
  };

  const app = initializeApp(firebaseConfig);

  export const auth =getAuth(app)
   