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
