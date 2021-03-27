var firebaseConfig = {
    apiKey: "AIzaSyB0IolPCQhnFsBsj386_lhACoYPITXtikw",
    authDomain: "helping-hands-f52f1.firebaseapp.com",
    projectId: "helping-hands-f52f1",
    storageBucket: "helping-hands-f52f1.appspot.com",
    messagingSenderId: "130421144161",
    appId: "1:130421144161:web:116c820cdd51c1a6a44820",
    measurementId: "G-1PE5SJ660Y"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;
      // alert("Your have successfully logged in!!")
      // ...
    } else {
      // User is signed out
      // ...
      window.location.href="signin.html";
    }
  });

  let logout=document.querySelector("#logout").value;
  document.querySelector("#logout").onclick=signout;

  function signout(){
      firebase.auth().signOut();
      window.location.href="index.html";
//       alert("user signed out")
      
  }
