const alunos = [
    {nome: "Sofia" ,nota: 9},
    {nome: "Renan" ,nota: 10},
    {nome: "Diana" ,nota: 4},
]

const aprovados = alunos.filter((aluno) => aluno.nota >= 7);

console.log(aprovados);