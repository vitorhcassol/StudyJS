//Tipos de dados

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
