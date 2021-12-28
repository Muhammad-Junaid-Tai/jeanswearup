// MenuBar Script Starts Here
var sideNavigationBar = document.getElementById('sideNavBar');
var sideMenubar = document.getElementById('menuBar');
// sideNavigationBar.style.width = "0px";

function menuBarfunc(){
    if(sideNavigationBar.style.width == "0px") {
        sideNavigationBar.style.width = "250px";
    }
    else{
        sideNavigationBar.style.width = "0px";
    }
}

// MenuBar Script Ends Here


// Resigtration and Login Script Starts Here
var accounts = [];

function signUpFunc() {
var email = document.getElementById("signUpEmail");
var password = document.getElementById("signUpPassword");

if(email.value !== "" && password.value !== "") {
    var credentials = {
        userEmail : email.value,
        userPassword : password.value
    }


accounts.push(credentials);
email.value = "";
password.value = "";
console.log(accounts);
}

}


function loginFunc(){


    var loginEmailVal = document.getElementById("loginEmail");
    var loginPasswordVal = document.getElementById("loginPassword");

    for(i=0; i<accounts.length; i++) {
        if(accounts[i].userEmail == loginEmailVal.value){
            if(accounts[i].userPassword == loginPasswordVal.value){
                // var userNameGet = accounts[i].userEmail;
                // // document.getElementById("userShow").innerHTML = userNameGet;
                // alert(userNameGet)

                loginEmailVal.value = "";
                loginPasswordVal.value = "";
                alert("You have Successfully Logged In");
                window.location = "./index.html";
                break
            }else{
                  alert("Incorrect Password");
                     break
                }
        }
    }


}
// Resigtration and Login Script Ends Here


// Contact us Response Script Starts Here

var contactUsResponses = [];

function contactSubmit(){
var userFullNameContact = document.getElementById("contactUsFullName");
var emailContact = document.getElementById("contactUsEmail");
var msgContact = document.getElementById("contactUsMsg");
if(userFullNameContact.value !== "" && emailContact.value !== "" && msgContact.value !== "") {
    var userResponse = {
        fullName : userFullNameContact.value,
        email : emailContact.value,
        msg : msgContact.value
    }


contactUsResponses.push(userResponse);
userFullNameContact.value = "";
emailContact.value = "";
msgContact.value = "";
console.log(contactUsResponses);
alert("We have got your message, Thank you for contacting us.")
}else{
    alert("Kindly fill all the fields.")
}

}


$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});


// find link
function findLink(){
    alert("This area is under construstion!");
}