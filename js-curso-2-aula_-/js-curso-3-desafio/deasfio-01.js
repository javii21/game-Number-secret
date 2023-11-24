/*
  !1-
  * Criar uma função que exibe "Olá, mundo!" no console.
*/

const helloWorld = "Hello world!";

function consoleMessage(message) {
  console.log(message);
};

consoleMessage(helloWorld);

/*
  !2-
 * Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
*/

let name = "Javier Romero";

function personalizedMessage(name){
  console.log(`Hi ${name}!`);
};
personalizedMessage(name);

/*
  !3-
  * Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
*/

function multiplesOf2(number) {
  return number * 2 ;
}

console.log(multiplesOf2(5));

/*
  !4-
 * Criar uma função que recebe três números como parâmetros e retorna a média deles.
*/
function calculateAverage(a, b, c) {
  return (a + b + c) / 3;
}

console.log(calculateAverage(4, 7, 10));


/*
  !5-
   * Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
*/
function maxMin(max, min) {

  if (max > min) {
    return max
  } 

  return min;
  
  // return numberMIn > numberMIn ? numberMax : numberMIn;
}

console.log(maxMin(7, 8));


/*
  !6-
 * Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
*/

function multiplication(number) {
  return number * number;
}

console.log(multiplication(2));