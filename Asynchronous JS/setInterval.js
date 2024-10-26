const textElement2=document.querySelector('#text-time-interval');
let seconds=0;

textElement2.textContent = `${seconds}`;


const timer = setInterval(()=>{
    seconds++;
    textElement2.textContent = `${seconds}`;

    if(seconds>=10){
        clearInterval(timer);
    }
},1000)

