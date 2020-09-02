let message: string = "Informe a primeira nota";

let notaA: number = 10;
let notaB: number = 5;

const verificanota: any = (): string => (notaA * 0.4 + notaB * 0.6) >= 5 ? 'Aprovado' : 'Reprovado';

console.log("Media: " + (notaA * 0.4 + notaB * 0.6));
console.log("Situação do aluno: " + verificanota());
