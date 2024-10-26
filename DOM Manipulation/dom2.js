//Event Propagation

//Bubbling
document
    .querySelector('h3')
    .addEventListener('click', (event) => {
        event.stopPropagation();
        console.log('Heading 3 Clicked');
    }   
    );

document
    .getElementById("innerDiv")
    .addEventListener('click', () => 
        console.log('Inner Div Clicked'),true
    );

// document
//     .querySelector('h2')
//     .addEventListener('click',  () => 
//         console.log('Heading 2 Clicked')
//     );


document
    .getElementsByTagName('div')[0]
    .addEventListener('click', () =>
      console.log('Outer div Clicked'),true
    );


document
    .body.addEventListener('click', () => 
    console.log('Body Clicked'),true
  );

// document.addEventListener('click', ()=>
//     console.log('Document Clicked')
//     );
  