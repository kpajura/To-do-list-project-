var username = "";

function resetFunction() {
    document.getElementById("regform").reset();
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var prevent_reload_1 = function (event) {
        event.preventDefault();
    };
    var form = document.getElementById("regform");
    var name = document.getElementById("usrname");
    form.addEventListener("submit", prevent_reload_1, true);

    var email = document.getElementById("email").value;
    var existingemail = getCookie(email);
    if (existingemail != "") {
        window.alert(existingemail + " is already a registered user, please proceed to log in. ");
        window.location.assign("login.html");
    } else {
        input_username = document.getElementById("usrname").value
        setCookie(email, input_username);
        window.alert("You are now a registered user, please proceed to log in. ");
        window.location.assign("login.html");
    }
}


function checkCookieLogin() {
    //Function to prevent the login page from reloading on submit.

    var prevent_reload_2 = function (event) {
        event.preventDefault();
    };
    var login = document.getElementById("logform");
    login.addEventListener("submit", prevent_reload_2, true);

    var email = document.getElementById("emaillogin").value;
    var cookieemail = getCookie(email);
    if (cookieemail != "") {
        window.alert("Welcome  " + cookieemail);
        username = cookieemail;
        window.location.assign("index.html");


        var usercookie = document.getElementById("usrname").value;
        var username = getCookie(usercookie);
        document.getElementById("LoggedInUserName").innerHTML = ("usrname").value;

    } else {
        window.alert("We cannot recognize this email, if you're not a registered user, please go to the register form to create a profile. ");
        window.location.assign("register.html");
    }
}


function popFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}
