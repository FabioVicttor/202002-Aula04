const valor: number = 1;
const resultado: number = Math.round(Math.random() * 6);

const verificanumero: any = (): string => valor === resultado ? 'Acertou' : 'Errou';

console.log(`Valor do resultado: ${resultado}`);
console.log(verificanumero());