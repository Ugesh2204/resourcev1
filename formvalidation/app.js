
let form = document.getElementById("form");


function printError(id,msg) {
 document.getElementById(id).innerHTML = msg;
}






form.addEventListener('submit', function(event){
   event.preventDefault();

   let name = document.getElementById("name").value;
   let email= document.getElementById("email").value;
   let mobile= document.getElementById("mobile").value;
   let country= document.getElementById("country").value;



   if(name == "") {
   printError("nameerr","Please enter your name");
   var elem = document.getElementById("name");
      elem.classList.add("input-red");
      elem.classList.remove("input-green");
   } 
   else {
         var regex = /^[a-zA-Z\s]+$/;
         if(regex.test(name) === false){
         printError("nameerr","Please enter a valid name");
            var elem = document.getElementById("name");
            elem.classList.add("input-red");
            elem.classList.remove("input-green");
         } else{
            console.log("ok for name");
            printError("nameerr"," ");
            var elem = document.getElementById("name");
            elem.classList.remove("input-red");
            elem.classList.add("input-green");
         }
   }

   if( email == ""){
      printError("emailerr", "Please enter your email");
      var elem = document.getElementById("email");
      elem.classList.add("input-red");
      elem.classList.remove("input-green");
   } else{
      let regex = /^\S+@\S+\.\S+$/;
      if(regex.test(email) === false){
         printError("emailerr", "Please enter a valid email");
         var elem = document.getElementById("email");
         elem.classList.add("input-red");
         elem.classList.remove("input-green");
      } else {
         printError("emailerr"," ");
         var elem = document.getElementById("email");
         elem.classList.remove("input-red");
         elem.classList.add("input-green");
      }

   }

   if(mobile == ""){
      printError("mobileerr","Please enter your mobile number");
      let elem = document.getElementById("mobile");
      elem.classList.add("input-red");
      elem.classList.remove("input-green");
   } else {
      let regex = /^[1-9]\d{9}$/;
      if(regex.test(mobile) === false){
         printError("mobileerr","Please enter a valid 10 digit mobile number");
         let elem = document.getElementById("mobile");
         elem.classList.add("input-red");
         elem.classList.remove("input-green");
      } else {
         printError("mobileerr","");
         let elem = document.getElementById("mobile");
         elem.classList.remove("input-red");
         elem.classList.add("input-green");
      }
   }


   if(country == "Select"){
      printError("countryerr","Please select a counrty");
      let elem = document.getElementById("country");
      elem.classList.add("input-red");
      elem.classList.remove("input-green");
   } else {
      printError("countryerr", "");
      countryerr = false;
      let elem = document.getElementById("country");
      elem.classList.remove("input-red");
      elem.classList.add("input-green");
   }

   var getSelectedValue = document.querySelector( 'input[name="gender"]:checked');   
   if(getSelectedValue == null) {   
      printError("gendererr", "Please select your Gender");
      let elem = document.querySelector(".form-inline");
      elem.classList.add("input-red");
   }
   else {  
         console.log("okkkk");
      }
   

});




