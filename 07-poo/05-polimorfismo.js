class Pessoa{
    apresentar(){
        console.log("Sou uma pessoa");    
    }
}

class Professor extends Pessoa{
    apresentar(){
        console.log("Sou professor");
    }
}

class Aluno extends Pessoa{
    apresentar(){
        console.log("Sou aluno");
    }
}

new Professor().apresentar();
new Aluno().apresentar();