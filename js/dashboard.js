function deco()
{
    localStorage.clear()
    location.replace("login.html")
}



function display_c(){
    var refresh=1000; // Refresh rate in milli seconds
    mytime=setTimeout('display_ct()',refresh)
    }
    
    function display_ct() {
    var x = new Date()
    document.getElementById('ct').innerHTML = x;
    display_c();
     }


$( document ).ready(function() {
display_c()
   var user_name = document.getElementById("username")
    let user_name_local = localStorage.getItem("userName")
user_name.innerText = user_name_local




});

