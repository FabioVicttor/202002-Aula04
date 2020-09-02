const arrayAleatorio: number[] = [];
let soma: number = 0;

for (let cont = 0; cont < 100; cont++) {
  arrayAleatorio.push(Math.round(Math.random()* 100));
}

soma = arrayAleatorio.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);

function sortArray(data: number[]): number[] {
  return data.sort((a, b) => a - b);
}

console.log(arrayAleatorio);
console.log(`Media: ${soma / 100}`);
console.log(`Soma: ${soma}`);
console.log(sortArray(arrayAleatorio));
