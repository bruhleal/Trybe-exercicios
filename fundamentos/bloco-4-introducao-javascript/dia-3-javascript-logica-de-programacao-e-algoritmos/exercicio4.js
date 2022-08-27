/*4- Um número primo é um número inteiro maior do que 1 que possui somente dois divisores,
 ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que 
 retorne o maior número primo entre 2 e 50.*/

 let maiorPrimo = 0;

 for (let number = 2; number <= 50; number += 1) {
   let prime = true;
   for (let divisor = 2; divisor < number; divisor += 1) {
     if (number % divisor === 0) {
       prime = false;
     }
   }
   if (prime) {
    maiorPrimo = number;
   }
 }
 
 console.log(maiorPrimo);