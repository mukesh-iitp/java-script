// const questionObj = 
//     {
//       category: 'Food & Drink',
//       id: 'qa-1',
//       correctAnswer: 'Three',
//       options: ['Two', 'Three', 'Four', 'Five'],
//       question:
//         "How many pieces of bun are in a Mcdonald's Big Mac?",
//     };

const quesJSON = [
  {
    correctAnswer: 'Three ',
    options: ['Two', 'Three ', 'Four', 'Five'],
    question:
      "How many pieces of bun are in a Mcdonald's Big Mac?",
  },
  {
    correctAnswer: 'L. Frank Baum',
    options: [
      'Suzanne Collins',
      'James Fenimore Cooper',
      'L. Frank Baum',
      'Donna Leon',
    ],
    question:
      "Which author wrote 'The Wonderful Wizard of Oz'?",
  },
  {
    correctAnswer: 'Atlanta United',
    options: [
      'Atlanta United',
      'Atlanta Impact',
      'Atlanta Bulls',
      'Atlanta Stars',
    ],
    question:
      'Which of these is a soccer team based in Atlanta?',
  },
  {
    correctAnswer: 'A Nanny',
    options: [
      'A Sow',
      'A Lioness',
      'A Hen',
      'A Nanny',
    ],
    question: 'A female goat is known as what?',
  },
  {
    correctAnswer: 'P. L. Travers',
    options: [
      'J. R. R. Tolkien',
      'P. L. Travers',
      'Lewis Carroll',
      'Enid Blyton',
    ],
    question:
      "Which author wrote 'Mary Poppins'?",
  },
];

// //Destructuring the Object
// const{
//   correctAnswer,
//   options,
//   question,
// // } = questionObj;
//   } = quesJSON;

let score = 0;
let currentQuestion = 0;
const totalScore=quesJSON.length;


//Accessing all the elements 
const questionEl = document.getElementById("question");
//questionEl.textContent = questionObj.question;

const optionEl=document.getElementById("options");

const scoreEl=document.getElementById("score");

const nextEl=document.getElementById("next");

showQuestion(); 

nextEl.addEventListener("click", ()=>{
  scoreEl.textContent = `Score: ${score}/${totalScore}`;
  nextQuestion();
});

function showQuestion(){

  //Destructuring the Object
  const{
    correctAnswer,
    options,
    question,
    } = quesJSON[currentQuestion];

  //Setting question text content
  questionEl.textContent = question;

  const shuffledOptions = shuffleOption(options);

  shuffledOptions.forEach((opt)=>{
    const btn=document.createElement('button');
    btn.textContent=opt;
    optionEl.appendChild(btn);
  
    //Event handling on the button
    btn.addEventListener('click', ()=>{
      if(opt === correctAnswer)
        score++;
      else
        score = score-0.25;
  
      // console.log(score);
      scoreEl.textContent = `Score: ${score}/${totalScore}`;
      // questionEl.textContent = 'Quiz Completed!!';
      // optionEl.textContent = '';
      nextQuestion(); 
    });
  
  });

}

function nextQuestion(){
  currentQuestion++;
  optionEl.textContent = '';
  if(currentQuestion >= quesJSON.length)
  {
    questionEl.textContent = 'Quiz Completed!!';
    nextEl.remove();
  }
  else
    showQuestion();

}


//Manipulating DOM

// const shuffledOptions = shuffleOption(options);

//Populating the question div with the buttons
// options.forEach((opt)=>{
// shuffledOptions.forEach((opt)=>{
//   const btn=document.createElement('button');
//   btn.textContent=opt;
//   optionEl.appendChild(btn);

//   //Event handling on the button
//   btn.addEventListener('click', ()=>{
//     if(opt === correctAnswer)
//       score++;
//     else
//       score = score-0.25;

//     // console.log(score);
//     scoreEl.textContent = `Score: ${score}`;
//     questionEl.textContent = 'Quiz Completed!!';
//     optionEl.textContent = '';

//   });

// });

//shuffling the options
function shuffleOption(options){
  for(let i=options.length-1; i>=0; i--){
    const j = Math.floor(Math.random() * i + 1 );

    [options[i],options[j]] = [options[j],options[i]];
    

  }

  // [options[3],options[0]] = [options[0],options[3]];
  // console.log(options);

  return options;

}
shuffleOption([1,2,3,4,5])
