//------------------Adição e Subtração------------

//Adição
let a = 0;
console.log(a);
a += 5;
console.log(a);
a++;
console.log(a);

//Subtração
let b = 10;
b -= 5;
console.log(b);
b--;
console.log(b);

//------------------Multiplicação, Divisão e Módulo------------

//Multiplicação
console.log(2 * 3);

//Divisão
console.log(10 / 5);

//Módulo = resto da divisão
console.log(2 % 2);

const ParOuImpar = (n) => {
    if (n % 2 === 0) {
        console.log(`O número ${n} é par!`)
    } else {
        console.log(`O número ${n} é impar!`)
    }
}

//ParOuImpar(2);

//------------------Comparação de valores------------

//Igualdade

console.log(3 == '3'); //comparação de igualdade que ignora a tipagem do dado
console.log(3 === '3'); //comparação de igualdade que inclui a tipagem do dado
console.log('a' === "A"); //ambas as comparações são CaseSensitive

//Diferença

console.log(3 != '3');
console.log(3 !== "3");
console.log('a' !== "A");

//Maior

console.log(3 > 1);
console.log(3 > 4);
console.log(3 > 3);
console.log(3 >= 3);

//Menor

console.log(3 < 1);
console.log(3 < 4);
console.log(3 < 3);
console.log(3 <= 3);

const numeroMaxDeAlunos = 5;
var numeroDeAlunos = 6;
if (numeroMaxDeAlunos < numeroDeAlunos) {
    console.log("Número máximo de alunos extrapolado!")
} else {
    console.log("Número máximo de alunos está OK!")
}