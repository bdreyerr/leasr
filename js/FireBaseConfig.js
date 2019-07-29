      // Your web app's Firebase configuration
      var firebaseConfig = {
        apiKey: "AIzaSyDDUtqrSwrxpOBCtFaupAhwjParxJ3LSpo",
        authDomain: "leasr-scu.firebaseapp.com",
        databaseURL: "https://leasr-scu.firebaseio.com",
        projectId: "leasr-scu",
        storageBucket: "",
        messagingSenderId: "630499067439",
        appId: "1:630499067439:web:90e7c534a6bf68bd"
      };

      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

      //auth and db references
      const db = firebase.database();
      const auth = firebase.auth();


