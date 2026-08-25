const alunos = [
    {nome:"João", nota: 9},
    {nome:"kemy", nota:6},
];

alunos.forEach((a)=> console.log(`O aluno ${a.nome}`));

const json= JSON.stringify(alunos);
console.log(json);