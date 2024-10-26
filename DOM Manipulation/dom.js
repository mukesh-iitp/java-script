
// console.log(document.querySelectorAll("h1"))
const firstHead = document.querySelectorAll("h1");
console.log(firstHead);
const heading = document.querySelector(".second");
const para = document.querySelector("#para");
console.log(heading);
console.log(para);

console.log(document.getElementById('para'));
console.log(document.getElementsByClassName('first'));
console.log(document.getElementsByTagName('h2'));

heading.style.color = "red";
para.style.backgroundColor = "lightgrey";


const btn = document.createElement("Button");
btn.textContent="Click Here";
btn.className="btn1";

const division = document.querySelector("div");
division.appendChild(btn);

// document.querySelector("h2").remove();

const p=document.querySelector("p");

function clickPara(name){
    console.log(name +" Para Clicked!");
}

// p.addEventListener("click", clickPara);
p.addEventListener("click", function() {clickPara("Hello!")}); //evenlistner with function argument


//removing heading on the click of a button
btn.addEventListener("click", () => document.querySelector('h2').remove());

//more on events
//Event listener on Para
p.addEventListener('mouseover', function() {
    p.style.backgroundColor='blue';
});

p.addEventListener('mousedown', function() {
    p.style.backgroundColor='yellow';
});
p.addEventListener('mouseup', function() {
    p.style.backgroundColor='';
});

document.addEventListener('keydown', (event) => {
    console.log('Keyboard key pressed!');
    console.log(event.key);
    console.log(event.keyCode);
});


//Event Propagation
