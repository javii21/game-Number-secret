/*
 !1-
 * Crie uma lista vazia, com o nome listaGenerica.
*/
let listaGenerica = [];

console.log(` ${typeof (listaGenerica)}:`, listaGenerica);


/*
  !2-
 * Crie uma lista de linguagens de programação 
 * chamada linguagensDeProgramacao com os seguintes 
 * elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'.
*/

let linguagensDeProgramacao = [' JavaScript ', ' C ', ' C++ ', ' Kotlin', 'Python'];

console.log(linguagensDeProgramacao, linguagensDeProgramacao.length, typeof (linguagensDeProgramacao));



/*
  !3-
  * Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.
*/

let linguagens= ["Java", "Ruby", "GoLang"];

let lista = [...linguagensDeProgramacao, ...linguagens ];  
console.log(lista.concat(" version 1"));

// usando concat 
lista = linguagensDeProgramacao.concat(linguagens)
console.log(lista);


// 🤦‍♂️ nao funciona
// lista = linguagens.filter(data => data%2==0 ? linguagensDeProgramacao.push(data) : data);
// console.log(`Usando Filter: ${lista}`)

// 🤦‍♂️ teste não funciona
  // lista = linguagensDeProgramacaoSegundario.forEach(Element => {
  //   return Element;
  // });  



console.log(lista);

/*
  !-4
 * Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.
*/

let listName = ["Yo", "Jonathan", "Ailton", ];  

console.log(listName[0] )

/*
  !-5
  * Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.
 */

let listName2 = ["Tu", "Michely", "Me gustas"];  
console.log(listName2[1]);

/*
  !6-
  * Crie uma lista com 3 nomes e exiba no console apenas o último elemento.
 */

let listNama3 = [ "Ailton", "Jonathan", "Jehova"];
console.log(listNama3[2]);