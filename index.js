const btn = document.querySelector(".btn");
const numb = document.querySelector(".num");
const decreaseNumb = document.querySelector(".btn-decrease")

let counter = 0;


function increease(){
    counter++;
    numb.textContent = counter;
}

function decrease(){
        counter--;
        numb.textContent= counter;
}
btn.addEventListener("click", increease)


decreaseNumb.addEventListener("click", decrease)