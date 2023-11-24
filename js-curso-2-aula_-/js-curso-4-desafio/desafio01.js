/*
  !1-
  * Crie uma função que calcule o índice de massa 
  * corporal (IMC) de uma pessoa, a partir de sua altura, 
  * em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
*/

let nome = "Javier"
let weight = 70;
let height = 1.60;

const person = {
  "name": `${nome}`,
  "weight": `${weight}`,
  "height": `${height}`,
  
  
}

function calculationIMC(person) {
  let { height } = person; 
  let { weight } = person;
  
  let imc = weight / (height * height);
  
  return imc 

}


calculationIMC(person);



/*
  !2-
  * Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
*/
let number = 4;
let resultado = calcularFactorial(number);
function calcularFactorial(number) {
    let fatorial = 1;

  if (number === 0 || number === 1) {
    return 1;
  }
  
    for (let i = 1; i <= number; ++i) {
      fatorial *= i;
  }
  
    return fatorial;
}
console.log(`O fatorail de ${number} é ${resultado}`);  


/*
  !3-
  * Crie uma função que converte um valor em dólar, passado como parâmetro, e 
  * retorna o valor equivalente em reais.Para isso, considere a cotação
  * do dólar igual a R$4, 80.
*/

function converterDolarParaReal(value) {
  let cotacaoDolar = 4.80;
  let valorEmReais = value * cotacaoDolar;
  return valorEmReais.toFixed(2);
}

let ValueEmDolar = 50;
let ValueEmReais = converterDolarParaReal(ValueEmDolar);
console.log(`${ValueEmDolar} dolares equivalem a R$ ${ValueEmReais}`);

/*
  !4-
 * Crie uma função que mostre na tela a área e o perímetro de uma 
 * sala retangular, utilizando altura e largura que serão dadas como parâmetro.
*/


calculoAreaPerimetroSalaRetangular(3, 5)
function calculoAreaPerimetroSalaRetangular(altura, largura) {
  let area = altura * altura;
  let perimetro =  2 * (altura + largura);


  console.log(`Areada sala: ${area} metros quadrados`);
  console.log(`Perímetro da sala: ${perimetro} metros`);
}
/*
  !5-
  * Crie uma função que mostre na tela a área e o perímetro de uma 
  * sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14
*/

calculoAreaPerimetroSalaCircular(5)
function calculoAreaPerimetroSalaCircular(raio) {
  let area = Math.PI * raio * raio; 
  let perimetro = 2 * Math.PI * raio;

  console.log(`Área da sala circular: ${area.toFixed(2)} metros quadrados`);
  console.log(`Perímetro da sala circular: ${perimetro.toFixed(2)} metros`);
}

/*
  !6-
 * Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
*/

mostrarTabuada(2)

function mostrarTabuada(number) {
  for (let i = 1; i <= 10; ++i){
    let resultado = number * i;
    console.log(`${number} x ${i} = ${resultado}`);
  }
}