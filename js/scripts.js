let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = ()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = ()=>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');


}


function calc(x1,x2,op) {
    return eval(`${x1}${op}${x2}`);
    
}
let res = calc(1,2,"+");
console.log(res);

let agora = new Date();
console.log(agora.toLocaleDateString("pt-br"));
let car = ["lambo","ferrari","bugatti"];
car.forEach(function (value,key) {
    console.log(key,value);
});
console.log(car);
