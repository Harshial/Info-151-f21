Fancybox.bind()





//alert("Hello Class!");

var mainNav = document.querySelector("#mainNav");
var signInUpButton = document.querySelector("#sign-in-up-button")
var burgerBtn = document.querySelector("#burger-container button");
//console.log(burgerBtn);

var canYouSeeMainNav = false;


function showNav(){
   //console.log("button clicked");
    if(canYouSeeMainNav === false){
        mainNav.classList.add("showMainNav");

        signInUpButton.classList.add("showSignIn");
        canYouSeeMainNav = true;
    }else{
        console.log("hide menu");
        mainNav.classList.remove("showMainNav");

        signInUpButton.classList.remove("showSignIn");


        canYouSeeMainNav = false;
    }
   


}
burgerBtn.addEventListener("click", showNav);
//showNav();

var signInBtn = document.querySelector("#sign-btn");

var signInContainer = document.querySelector("#sign-in-container");


function showSignInModal(){
//console.log("show modal now");

signInContainer.classList.add("Show-sign-in-container");
}

signInBtn.addEventListener("click", showSignInModal);