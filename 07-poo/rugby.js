class jogadorRugby{
    constructor(nome, numero , posicao){
        this.nome = nome;
        this.numero= numero;
        this.posicao=posicao;
    }
    correr(){
        console.log('${this.nome está correndo com a bola}');
    }
    passarBola(){
        console.log('${this.nome}passou a bola');
    }

    mostrarDados(){
        console.log('nome: ${this.nome}');
        console.log('numero: ${this.numero)');
        console.log('posicao: ${this.posicao}');
    }
}

const jogador1 =  new jogadorRugby("Pablo",10,"abertura");

jogador1.mostrarDados();
jogador1.correr();
jogador1.passarBola();
