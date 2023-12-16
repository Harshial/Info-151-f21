//alert("Hello Class!");

var mainNav = document.querySelector("#mainNav");
var signInUpBtn = document.querySelector("#sign-in-up-btn")
var burgerBtn = document.querySelector("#burger-container button");
console.log(burgerBtn);

var canYouSeeMainNav = false;


function showNav(){
   console.log("button clicked");
    if(canYouSeeMainNav === false){
        mainNav.classList.add("showMainNav");

        signInUpBtn.classList.add("showSignIn");
        canYouSeeMainNav = true;
    }else{
        mainNav.classList.remove("showMainNav");

        signInUpBtn.classList.remove("showSignIn");


        canYouSeeMainNav = false;
    }
   


}
burgerBtn.addEventListener("click", showNav);
//showNav();

var signInBtn = document.querySelector("#sign-btn");

var signInContainer = document.querySelector("#sign-in-container");


function showSignInModal(){
//console.log("show modal now");

signInContainer.classList.add("#Show-sign-in-container");
}

SignInBtn.addEventListener("click", showSignInModal);