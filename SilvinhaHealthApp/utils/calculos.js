export const calcularIMC = (peso, altura) => {
    const imc = peso / (altura * altura);
    let classificacao = '';

    if (imc < 18.5) classificacao = 'Abaixo do peso';
    else if (imc < 24.9) classificacao = 'Peso normal';
    else if (imc <29.9) classificacao = 'Sobrepeso';
    else if (imc < 34.9) classificacao = 'Obesidade Grau 1';
    else if (imc < 39.9) classificacao = 'Obesidade Grau 2';
    else classificacao = 'Obesidade Grau 3';

    return {
        valor: imc.toFixed(2),
        classificacao
    };
};

export const calcularPesoIdeal = (altura, sexo) => {
    const alturaCm = altura * 100;
    let pesoIdeal = 0;

    if (sexo === 'masculino') {
        pesoIdeal = 50 + 2.3 * ((alturaCm - 152.4) / 2.54);
    }

    return pesoIdeal.toFixed(1);
};

export const calcularAgua = (peso) => {
    const aguaML = peso * 35;
    const aguaL = aguaML / 1000;
    return {
        ml: Math.round(aguaML),
        l: aguaL.toFixed(1)
    };
};

export const calcularTMB = (peso, altura, idade, sexo) => {
    const alturaCm = altura * 100;
    let tmb = 0;

    if (sexo === 'masculino') {
        tmb = (10 * peso) + (6.25 * alturaCm) - (5 * idade) + 5;
    } else {
        tmb = (10 * peso) + (6.25 * alturaCm) - (5 * altura) - 161;
    }

    return Math.round(tmb);
}