  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-analytics.js";
  import { getAuth ,
           onAuthStateChanged ,
           createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

 
  const firebaseConfig = {
    apiKey: "AIzaSyAO3JIZBR0pRdaLMq-lwHm3YrMAcN2IS_U",
    authDomain: "my-project-6a025.firebaseapp.com",
    projectId: "my-project-6a025",
    storageBucket: "my-project-6a025.appspot.com",
    messagingSenderId: "913593752126",
    appId: "1:913593752126:web:6ac3146785121a486d4f6f",
    measurementId: "G-NLSG8S0W9X"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  
  const auth = getAuth(app);
  


  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
  

