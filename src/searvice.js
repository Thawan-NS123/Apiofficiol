export function somar(a, b){
    return a + b;
}

export function dobro(n){
    return n * 2;
}

export function temperatura(n){

    if(n >= 37.8)
    return true;

    else
    return false;

}

export function CalcularMedia(n1,n2, n3){
    return(n1 + n2 + n3) / 3;
}

export function corPrimaria(cor){
    let msg = true;

    if(cor == 'amarelo' || cor == 'vermelho' || cor == 'azul')
    {
        return msg;
    }
    else
    {
        msg = false;
    }

    return msg;
}

export function ingresso(qtdInteiras, qtdMeias, diaSemana ,nacionalidade){
    if(nacionalidade == 'brasileira' || nacionalidade == 'brasileiro')
    return (qtdInteiras + qtdMeias) * 5;

    else if(diaSemana == 'quarta')
    return (qtdInteiras + qtdMeias) * 14.25;

    else 
    return qtdInteiras * 28.50 + qtdMeias * 14.25;
}

export function frequanciaCaracter(texto, caracter){

    let qtd = 0;

    for(let letra of texto){
        if(letra == caracter)
            qtd++;
    }

    return qtd;
}

export function maiorNumero(numeros){
    let maior = Number.MIN_VALUE;
    for(let item of numeros){
        if(item > maior)
            maior = item;
    }
    return maior;
}