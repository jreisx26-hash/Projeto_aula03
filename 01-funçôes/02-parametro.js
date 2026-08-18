// function apresentar( nome ){
// console.log(`Ola´, ${nome}`)
// }

// apresentar("Vitor");

function somar(a , b){
    console.log(`${a} + ${b} = ${a+b}`);
}

somar(57, 10);

    function apresentar(nome = "visitante"){
        console.log(`Olá, ${nome}`);
    }

    apresentar();
    apresentar("Vitor");