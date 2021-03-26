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
  let tableBody=document.querySelector("#tableBody");

  database.collection("categories").get().then((querySnapshot) =>{
      querySnapshot.forEach(doc => {
          var data=doc.data();
          var category=data.name;
          var image=data.image;

          const tr=document.createElement('tr');
          const nametd=document.createElement('td');
          const imag=document.createElement('img');
          const ispan=document.createElement('span');

          //imag.setAttribute('src',image);
          imag.src=image;
          imag.setAttribute('class','userImg');
          ispan.appendChild(imag);
          nametd.appendChild(ispan);
          nametd.innerHTML=category;

          tr.appendChild(nametd);
          tableBody.appendChild(tr);
      });

  });