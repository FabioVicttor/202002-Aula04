const peso: number = 55;
const altura: number = 1.65;
let imc: number = peso / Math.pow(altura, 2);

imc = parseFloat(imc.toFixed(2));

if (imc < 18.5) {
  console.log("IMC: " + imc + " - Abaixo do Peso");
} else if (imc >= 18.5 && imc <= 24.9) {
  console.log("IMC: " + imc + " - Peso Ideal");
} else if (imc >= 25 && imc <= 29.9) {
  console.log("IMC: " + imc + " - Acima do Peso");
} else if (imc >= 30 && imc <= 34.9) {
  console.log("IMC: " + imc + " - Obesidade Grau 1");
} else if (imc >= 35 && imc <= 40) {
  console.log("IMC: " + imc + " - Obesidade Grau 2");
} else {
  console.log("IMC: " + imc + " - Obesidade Grau 3");
}
