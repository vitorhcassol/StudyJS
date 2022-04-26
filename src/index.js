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
