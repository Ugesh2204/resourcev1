
/**Nav */

let nav = document.querySelector(".navbar");
let menubtn = document.getElementById("menu-btn");

menubtn.addEventListener("click" ,function(){
    console.log("hit");
    nav.classList.toggle('active');
})




let email = document.getElementById("email").value;
let submit = document.getElementById("form");
// let errormsgname = document.getElementById("errormsgname");
// let errormsgemail = document.getElementById("errormsgemail");

let emptyfieldName =`<p style="color:red">Please add your Name</p>`;
let emptyfieldEmail =`<p style="color:red">Please add your Email</p>`;

var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

let nresult = document.getElementById("nresult");



submit.addEventListener("submit",function(e){
    e.preventDefault();
    
    function printError(id,msg) {
        document.getElementById(id).innerHTML = msg;
    }
       
    console.log("ok");
    let iName = document.getElementById("name").value;
    if(iName == ""){
        printError("errormsgname","Please enter your Name");

    } else {
        if(iName){
            let nresult = document.getElementById("nresult");
            nresult.innerHTML = iName;
            printError("errormsgname", " ")
        }
    }
});

