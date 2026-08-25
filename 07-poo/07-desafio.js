class Aluno{
    constructor(nome, nota1, nota2){
        this.nome = nome;
        this.nota1= nota1;
        this.nota2= nota2
    }
    calcularMedia(){
        return (this.nota1 + this.nota2) / 2;
    }

    verificarSituacao(){
        return this.calcularMedia() >= 7 ? "Aprovado" : "Reprovado";
    }

    exibirDados(){
        console.log(`${this.nome} | ${this.verificarSituacao()}`);
    }
}
const alunos = [
    new Aluno("Ana",8 , 9), 
    new Aluno("Pedro", 5,6), 
    new Aluno("João", 7,8), 
];

alunos.forEach((aluno) => aluno.exibirDados());