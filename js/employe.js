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
 
const addEmployeBtnUI = document.getElementById("add-employe-btn");
addEmployeBtnUI.addEventListener("click", registeremploye)




function checkMatch()
{
  const addEmployeInputsUI = document.getElementsByClassName("employe-input");
 
  if (addEmployeInputsUI[3].value < 2400) 
    throw(new Error("le salaire  doit être > 2400 "))


	
}



function registeremploye()
{
  checkMatch()

   // alert('test')
    const employeref = dbRef.child('employe');
    const addEmployeInputsUI = document.getElementsByClassName("employe-input");
    let newEmploye = {};
    console.log(addEmployeInputsUI)
    for (let i = 0, len = addEmployeInputsUI.length; i < len; i++) {

        let key = addEmployeInputsUI[i].getAttribute('data-key');
        let value = addEmployeInputsUI[i].value;
        newEmploye[key] = value;
    }
    console.log(newEmploye)
	employeref.push(newEmploye)
}


