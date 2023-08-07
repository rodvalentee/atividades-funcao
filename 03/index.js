const numeros = [3, 4, 1, 8, 11, 7, 5];


function maior(array){
    maior = array[0]
    for(numero of array){
        if(numero>maior){
            maior = numero
        }
    }
    return maior
}

console.log(maior(numeros))