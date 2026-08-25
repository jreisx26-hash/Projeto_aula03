const respostaAPI= '[{"id:1, "nome": "João"}, {"id": 2 "nome": "Luz"}]';

const ususarios= JSON.parse(respostaAPI);

ususarios.forEach( aluno => {
console.log(aluno.nome);
})