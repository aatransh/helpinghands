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
firebase.analytics();

  firebase.auth.Auth.Persistence.LOCAL;

  $("#btn").click(function()
  {
    var email = $("#email").val();
    var password = $("#pwd").val();

    if(email!="" && password!="")
    {
        var result=firebase.auth().signInWithEmailAndPassword(email,password);
        result.catch(function(error)
        {
          var errorCode=error.code;
          var errorMessage=error.message;
               
          console.log(errorCode);
          console.log(errorMessage);
          window.alert("Message :" + errorMessage);
        });
    }
    else
    {
      window.alert("Please fill complete Data");
    }
  });