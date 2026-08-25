class Aluno {
    constructor(nome, idade){
        this.nome = nome,
        this.idade = idade
    };
    apresentar(){
        console.log('${this.nome} - idade: ${this.idade}');
    }
}

const aluno = new Aluno("João",17);
aluno.apresentar();

const aluno2 = new Aluno("Pedro",17);
aluno.apresentar();
