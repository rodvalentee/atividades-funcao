
const alturaEmCm = 185;

function verif(altura){
    if(altura>=180){
        return 'APROVADO'
    }
    else{
        return 'REPROVADO'
    }
}

console.log(verif(alturaEmCm))