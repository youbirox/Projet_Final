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


  // Firebase Database Reference and the child
const dbRef = firebase.database().ref();
const usersRef = dbRef.child('user');

 
	


function display()
{
    document.getElementById("AlertD").style.display="none";
}
function redirect()
{
    location.replace("dashbord.html")
}



//-------
// Vérification si le mot de pass bien saisir 
// -------------

function checkMatch()
{
	if (! nom.match(/[A-Z a-z]/)) 
        throw(new Error("le nom ne doit contenir que des lettres et des espaces"))
    if (nom.length<=3) 
        throw(new Error("le nom doit être >3 caractéres"))
    
    if (! prenom.match(/[A-Z a-z]/)) 
        throw(new Error("le prénom ne doit contenir que des lettres et des espaces"))
    
    
    if (!parseInt(age))  //isNAN(age)
        throw(new Error("l'age dois être numérique"))
    
    if (age < 20) 
        throw(new Error("l'age doit être supérieur à 20 ans"))
    if (adresse.length < 20) 
        throw(new Error("l'Adresse doit être de 20 caractéres au mois"))
    
    if (! adresse.match(/[ ]/)) 
        throw(new Error("l' adresse doit comporter au moins un espace"))
    
    if (! grades.includes(grade.toLowerCase())) 
        throw(new Error("la grade doit être correcte"))
}
// --------------------------
// READ
// --------------------------
function loginUser() {



	usersRef.on("value", snap => {

		//userListUI.innerHTML = ""
		let login = document.getElementById("login").value;
		let password = document.getElementById("password").value;
		//console.log(login)
		snap.forEach(childSnap => {

			let key = childSnap.key,
				value = childSnap.val()
				//console.log(value.login)
  			
			if (login == value.login && password == value.password) {

				document.getElementById("AlertS").style.display="block";
				const today = new Date();
				var time =today.getDay() + "/"+today.getMonth() + "/"+today.getFullYear()
				+ " "+ today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
		
				window.localStorage.setItem('LastConn',time );
				window.localStorage.setItem('userName',login );
				setInterval(redirect, 3000);
				
			}else
			{
				document.getElementById("AlertD").style.display="block";
				setInterval(display, 1500);
			}
		

 		});


	})

}

const addJoueurBtnUI = document.getElementById("add-joueur-btn");
addJoueurBtnUI.addEventListener("click", registerJoueur)

function registerJoueur()
{

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


const addEmployeBtnUI = document.getElementById("add-employe-btn");
addEmployeBtnUI.addEventListener("click", registerJoueur)

function registerJoueur()
{

   // alert('test')
    const joueurRef = dbRef.child('employe');
    const addEmployeInputsUI = document.getElementsByClassName("employe-input");
    let newEmploye = {};
    //console.log(addJoueurInputsUI)
    for (let i = 0, len = addEmployeInputsUI.length; i < len; i++) {

        let key = addEmployeInputsUI[i].getAttribute('data-key');
        let value = addEmployeInputsUI[i].value;
        newEmploye[key] = value;
    }
   
	joueurRef.push(newEmploye)
}


