var nomesalunos = [{
    nome: "Bahia",
    nota: 10
},
{
    nome: "Fabio",
    nota: 5
},
{
    nome: "Victor",
    nota: 7
},
{
    nome: "Vitor",
    nota: 4
},
{
    nome: "Xablau",
    nota: 0
},
{
    nome: "Sexto",
    nota: 4
}];

alunos(nomesalunos);

function alunos(nomes) {
    nomes.sort(function (b, a) {
        return a.nota - b.nota
    });
    nomes.reduce((x, array, i) => {
        console.log("Aluno: " + array.nome + ", " + "Nota: " + array.nota + " - " + (array.nota > 9 ? "Aprovado" : (array.nota > 3 && array.nota < 9) ? "Lista de Espera" : "Não foi desta vez"));
    }, "");
}


