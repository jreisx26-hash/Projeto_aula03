const valores = [10 , 20, 30, 40, 50];

const total = valores.reduce(
    (acumulador, valor) => acumulador + valor , 0
);

console.log(total);

//0 + 10 = 10
//10 + 20 = 30
//30 + 30 = 60
//60 + 40 = 100
//100 + 50 = 150

