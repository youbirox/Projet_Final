// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD3atQQ3pa3Mj5HUCoqcJZ7vhDCZKWFSqU",
    authDomain: "projetfirebase-7e2d8.firebaseapp.com",
    databaseURL: "https://projetfirebase-7e2d8-default-rtdb.firebaseio.com/",
    projectId: "projetfirebase-7e2d8",
    storageBucket: "projetfirebase-7e2d8.appspot.com",
    messagingSenderId: "238548764672",
    appId: "1:238548764672:web:a2e82c2102a2f404b1f0e5"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const dbRef = firebase.database().ref();


const addJoueurBtnUI = document.getElementById("add-joueur-btn");
addJoueurBtnUI.addEventListener("click", registerJoueur)

function checkMatch()
{
    const addJoueurInputsUI = document.getElementsByClassName("joueur-input");
 
  if (addJoueurInputsUI[4].value < 12) 
   addJoueurInputsUI[5].value="minime"
   else if (addJoueurInputsUI[4].value > 12 && addJoueurInputsUI[4].value < 15) 
   addJoueurInputsUI[5].value="cadet"
   else if (addJoueurInputsUI[4].value > 15 && addJoueurInputsUI[4].value < 18) 
   addJoueurInputsUI[5].value="junior"
   else if (addJoueurInputsUI[4].value > 18) 
   addJoueurInputsUI[5].value="séniors"
   if (! addJoueurInputsUI[0].value.match(/[A-Z a-z]/)) 
   throw(new Error("le nom ne doit contenir que des lettres et des espaces"))
   if (! addJoueurInputsUI[1].value.match(/[A-Z a-z]/)) 
   throw(new Error("le prénom ne doit contenir que des lettres et des espaces"))

	
}
function registerJoueur()
{
    checkMatch()
   // alert('test')
    const joueurRef = dbRef.child('joueur');
    const addJoueurInputsUI = document.getElementsByClassName("joueur-input");
    let newJoueur = {};
    //console.log(addJoueurInputsUI)
    for (let i = 0, len = addJoueurInputsUI.length; i < len; i++) {

        let key = addJoueurInputsUI[i].getAttribute('data-key');
        let value = addJoueurInputsUI[i].value;
        newJoueur[key] = value;
    }
   
	joueurRef.push(newJoueur)
}

