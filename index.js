
let hbMenuClicked = document.getElementById("hbMenu");
let mobileNav = document.getElementById("mobileNav");
let landingDiv = document.getElementById("landing");
let navExit = document.getElementById("exitIcon");


let toggleMobileNav = () =>{
    mobileNav.classList.remove("hidden");
    landingDiv.classList.add("hidden")
}

let exitMobileNav = ()=>{
    mobileNav.classList.add("hidden");
    landingDiv.classList.remove("hidden");
}

// These wait and listen for the user to do these actions. 
hbMenuClicked.addEventListener("click",toggleMobileNav);
navExit.addEventListener("click",exitMobileNav)