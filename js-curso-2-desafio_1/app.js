let titleElement_ = document.querySelector(".title");

titleElement_.innerHTML = "Hora do Desafio";

function mensagemNoConsole(){
  console.log("O botão foi clicado");
}

const mensagemAlert = () => alert("Eu amo JS");

const preguntaCidade = () => {
  let cidade = prompt("De qual Cidade é você?");
  
  return alert(`Estive em ${cidade} e lembrei de você`);
}


function soma (){
  alert("Vamos Somar!")
  let valor1 = prompt("Dejite um número");
  let valor2 = prompt("Dejite outro número");
  let resultado = Number(valor1) +  Number(valor2);
  
  return alert(`O resultado da soma entre ${valor1} e o ${valor2} é: ${resultado}`);
};