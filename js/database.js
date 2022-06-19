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




