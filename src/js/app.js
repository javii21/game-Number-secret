// const titleElement_ = document.querySelector(".container__title");
// const textElement_ = document.querySelector(".texto__paragrafo");

// // Contenido do título y do párrafo
// titleElement_.innerHTML = "Jogo do número secreto"; 
// textElement_.innerHTML = " Escolha um numero entre 1 e 10 "; 

// obtendo o valor do input de nosso HTML

let drawnNumberList = [];
let secretNumber = getRandomNumber();
let counter = 1; 

const displayingText = (teg, text)  => {
  let textElement_ = document.querySelector(teg);
  textElement_.innerHTML = text;

  responsiveVoice.speak(text, 'Brazilian Portuguese Female', {rate:1.2});
}


const mainMessage = () => {
  displayingText("h1", "Jogo do número secreto");
  displayingText("p", "Escolha um número entre 1 e 10 ");
}

mainMessage();

function vereficarChute( ){  
  let inputElement_ = document.querySelector(".container__input").value;

  let inputValueNumber = +inputElement_; 
  
  const tentativeMessages =  ( counter ) => counter > 1 ? " tentativas" : "tentativa";

  if (secretNumber === inputValueNumber ) {
    displayingText("h1",  "Parabens, Jogamos uma mais!");
    displayingText("p", `Você descobriu o número secreto como ${counter} ${tentativeMessages()}`);
    document.getElementById("reiniciar").removeAttribute("disabled");

  } else {
    if ( secretNumber > inputValueNumber) {
      
      displayingText("p", `Número secreto é maior`);
      
    } else if (secretNumber < inputValueNumber) {

      displayingText("p", `Número secreto é menor`);
    }
  }

  counter++
  cleanInput();
}

function getRandomNumber() {
  let chosenNumber = parseInt(Math.random() * 100) + 1;

  if (drawnNumberList.includes(chosenNumber)) {
    return getRandomNumber();
  } else {
    drawnNumberList.push(chosenNumber);
    console.log(drawnNumberList);
    return chosenNumber;
  }
}

function cleanInput ()  {
  inputElement_ = document.querySelector(".container__input");
  inputElement_.value = " ";
};


function resetGamer() {
  secretNumber = getRandomNumber();
  cleanInput();
  mainMessage();
  counter = 1; 
  document.getElementById("reiniciar").setAttribute("disabled", true);
}