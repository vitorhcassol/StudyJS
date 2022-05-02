//---------------------Tipos de dados---------------------------

//Boolean
console.log(typeof true);
console.log(typeof false);

//Number (float,hexa,int)
console.log(typeof 42);
console.log(typeof 1.1);
console.log(typeof 0xffffff);

//Strings
console.log(typeof "String de aspas simples");
console.log(typeof "String de aspas duplas");
console.log(typeof `String de crase`); //Usada para colocar variáveis dentro, igual python.

// Testes de variável dentro da string com crase/backstick
var teste = 10;
console.log(`Eu tenho ${teste} bottoms.`);

//Undefined - valor não atribuído à uma varoável
console.log(typeof undefined);

//Null - valor atribuído à variável, mas valor vazio, nulo
console.log(typeof null);

//Symbol - usado para fazer operações em objetos
console.log(typeof Symbol("symbol"));

//Object - não primitivo diferente dos outros
console.log(
  typeof {
    nome: "Vitor"
  }
);

//---------------------Variáveis---------------------------

//variáveis globais e de escopo

//var
var resposta = 42;
console.log(resposta);

//let
let idade = 22;
console.log(idade);

//const
const mundial = 0;
console.log(mundial);

//let e var permitem atribuiçao de novos valores a variavel
resposta = 24;
console.log(resposta);
idade = idade + 1;
console.log(idade);

//const é uma constante e nao pode ser alterada
//mundial = 1; // gera erro

//---------------------Funções---------------------------

//Ex 1 - declaração comum
//function test(p1, p2) {};

//Ex2 - declaração com constante
///=const test = function(p1, p2) {};

//Ex3 - declaração com ArrowFunction
//const test = (p1, p2) => {};

//Prática
function soma(p1, p2) {
  console.log(p1 + p2);
}

const subtracao = function (p1, p2) {
  console.log(p1 - p2);
};

const multiplicacao = (p1, p2) => console.log(p1 * p2);

soma(3, 2);
subtracao(3, 2);
multiplicacao(3, 2);

//---------------------Condicionais---------------------------

//If e else
const parImpar = (p1) => {
  if (p1 % 2 === 0) {
    console.log(`${p1} é par!`);
  } else {
    console.log(`${p1} é impar!`);
  }
};

parImpar(2);
parImpar(3);

//Operador Ternário
var booleanT = true;
var booleanF = false;

console.log(booleanT ? "Verdadeiro" : "Falso");
console.log(booleanF ? "Verdadeiro" : "Falso");

//Switch
/*const opcao = prompt("Digite uma opção entre 1 e 3: ");
switch (opcao) {
  case "1":
    console.log("Opção 1 digitada.");
    break;
  case "2":
    console.log("Opção 2 digitada.");
    break;
  case "3":
    console.log("Opção 3 digitada.");
    break;
  default:
    console.log("Opção inválida.");
    break;
}
*/

//----------------------------Laços---------------------------

//while

/*
let a = 1;
while (a <= 10) {
  console.log(`valor de a = ${a}`);
  a = a+1;
}
*/

//do.. while

/*
let b = 1;
do {
  console.log(`valor de b = ${b}`);
  b = b+1;
} while (b <= 10);
*/

//for

/*
for (let i = 1; i <= 10; i++) {
  console.log(`o valor de i = ${i}`);
}
*/

//for..in

/*
const pessoa = { nome: "Vitor", idade: 22 };
for (let chave in pessoa) {
  console.log(`${chave}`);
}
*/

//for..of

/*
const nomes = ["Vitor", "Alexandre", "Raissa"];
for (let nome of nomes) {
  console.log(`${nome}`)
}
*/

//----------------------------Escopo---------------------------

//Escopo Global

const variavelGlobal = 1;

const testeVariavel = () => {
  console.log(variavelGlobal);
  const variavelDeFuncao = 2; //variavel de escopo de função
  console.log(variavelDeFuncao);
};

//testeVariavel();
//console.log(variavelDeFuncao); gera erro, afinal a variavel de função só pode ser acessada dentro da função

/*
{
  console.log(variavelGlobal);
  const variavelDeBloco = 3; //variavel de escopo de bloco
  console.log(variavelDeBloco);
}
*/
//console.log(variavelDeBloco); gera erro pois a variavel de bloco só pode ser acessada dentro do bloco

//----------------------------Tratamento de Erros---------------------------

//try cathc / try finally e try catch finally

//criando uma função que gera um erro
const gerarErro = () => {
  throw new Error("Ops, algo deu errado");
};

//try catch finally

const erroComTratamento = () => {
  try {
    gerarErro();
  } catch (error) {
    console.log(`Um erro aconteceu: ${error.message}`);
  } finally {
    console.log("finally está sendo chamado");
  }
};

erroComTratamento();

console.log("Executado depois do error com tratamento");

const erroSemTratamento = () => {
  gerarErro();
};
erroSemTratamento();

console.log("Executado depois do error sem tratamento"); //Não é executado
