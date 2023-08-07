const numeros = [35, 12, 7, 11];

function soma(array){
    var soma = 0
    for(numero of array){
        soma+=numero
    }
    return soma
}
console.log(soma(numeros))