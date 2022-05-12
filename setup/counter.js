
    let count = 0;

let countervalue = document.querySelector(".counter__value");

let btns = document.querySelectorAll(".btn");

console.log(btns);



btns.forEach(function(btn){



    btn.addEventListener("click",function(e){
        const targetvalue = e.currentTarget;
        console.log(targetvalue);

        if(targetvalue.classList.contains("Increase")){
            count++;
        } 
        else if(targetvalue.classList.contains("Decrease")){
            count--;
        } else{
            count = 0;
        }


        countervalue.textContent = count;

        console.log(count);

    });
  
  
});







