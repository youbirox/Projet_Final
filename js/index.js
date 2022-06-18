function redirect()
{
    location.replace("login.html")
}

$( document ).ready(function() {

    setInterval(redirect, 3000);

});
