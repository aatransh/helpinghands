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

  database.collection("workers").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        var data=doc.data();
        var image=data.image;
        var name=data.name;
        var email=data.email;
        var contact=data.contact;
        var address=data.address;
        var category=data.category;

        if(email===undefined)
         email="-"
        if(address===undefined)
         address="-"

        const tr=document.createElement('tr');
        const nametd=document.createElement('td');
        const mailtd=document.createElement('td');
        const phonetd=document.createElement('td');
        const addtd=document.createElement('td');
        const catetd=document.createElement('td');
        const ispan=document.createElement('span');
        const imag =document.createElement('img');

        imag.setAttribute("src",image);
        //imag.src=image;
        imag.setAttribute("class","userImg");
        
        ispan.appendChild(imag);
        nametd.appendChild(ispan);
        nametd.innerHTML=name;
        mailtd.innerHTML=email;
        phonetd.innerHTML=contact;
        addtd.innerHTML=address;
        catetd.innerHTML=category;
        tr.appendChild(nametd);
        tr.appendChild(mailtd);
        tr.appendChild(phonetd);
        tr.appendChild(addtd);
        tr.appendChild(catetd);

        tableBody.appendChild(tr);
    });
});
