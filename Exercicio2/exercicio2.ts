let Pares = 0;
let Impares = 0;

for(let cont = 1; cont <= 1000; cont++) {
  if(cont % 2) {
    Pares += cont;
  } else {
    Impares += cont;
  }
}

console.log(`Total da soma de números pares: ${Pares}`);
console.log(`Total da soma de números impares: ${Impares}`);