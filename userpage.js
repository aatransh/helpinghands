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

  let database=firebase.firestore();
  // let list=document.querySelector("#testList");
  let list=document.querySelector(".list_of_users");

  database.collection("users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        // // console.log(`${doc.data().name}`);
        // var name=doc.data().name;
        // const li = document.createElement('li');
        // li.innerHTML = name;
        // list.appendChild(li);
        var data=doc.data();
        var name=data.name;
        const li=document.createElement('li');
        li.setAttribute("class","users_data");
        li.innerHTML=name;
        list.appendChild(li);
       });
});

