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

  //firebase.auth.Auth.Persistence.LOCAL;

  function login(){
    let userEmail=document.querySelector("#email").value;
    let userPassword=document.querySelector("#pwd").value;

    if(userEmail==="admin@helpinghands.com"&&userPassword==="admin@21"){
      document.getElementById("Progress").style.visibility = "visible";
      firebase.auth().createUserWithEmailAndPassword(userEmail,userPassword)
      .then((userCredential) => {
    // Signed in 
      //var user = userCredential.user;
      window.location.href="LandingPage.html";
      //alert("Signed In successfully...Hare Krishna");
    // ...
  })
  .catch((error) => {
    document.getElementById("Progress").style.visibility = "hidden";
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage);
    // ..
  });
    }
    else if(userEmail==="")
      alert("Please fill the Email");
    
    else if(userPassword==="")
      alert("Please fill the Password");

    else if(userEmail!="admin@helpinghands.com")
      alert("Admin Email is invalid");
    
    else if(userPassword!="admin@21")
      alert("Admin Password is invalid");
  }

  document.querySelector("#submit").onclick=login;
