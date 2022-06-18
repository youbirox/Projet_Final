function display()
{
    document.getElementById("AlertD").style.display="none";
}
function loginUser()
{
    // Récuperation les parametre de LocalStorage
   

    // Récuperation les valeur du formaulaire


    

    //Vérication si user a bien entrer les valeurs correct

    if (UserLogin == login && UserPassword == password) {
    
        document.getElementById("AlertS").style.display="block";
        const today = new Date();
        var time =today.getDay() + "/"+today.getMonth() + "/"+today.getFullYear()
        + " "+ today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

        window.localStorage.setItem('LastConn',time );
        setInterval(redirect, 3000);
        
    }else
    {
        
        document.getElementById("AlertD").style.display="block";
        setInterval(display, 1500);
    }

}

