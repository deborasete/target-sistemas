// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;


let faturamentoDiario = [
    { dia: 1, faturamento: 200 },
    { dia: 2, faturamento: 150 },
    { dia: 3, faturamento: 0 },
    { dia: 4, faturamento: 300 },
    { dia: 5, faturamento: 100 },
    { dia: 6, faturamento: 0 },
    { dia: 7, faturamento: 250 },
    { dia: 8, faturamento: 400 },
    { dia: 9, faturamento: 500 },
    { dia: 10, faturamento: 0 }
];


function calcularFaturamento(faturamentoDiario) {
    let menorFaturamento = Infinity;
    let maiorFaturamento = -Infinity;
    let somaFaturamento = 0;
    let diasComFaturamento = 0;


    faturamentoDiario.forEach(dia => {
        if (dia.faturamento > 0) {
            if (dia.faturamento < menorFaturamento) {
                menorFaturamento = dia.faturamento;
            }
            if (dia.faturamento > maiorFaturamento) {
                maiorFaturamento = dia.faturamento;
            }
            somaFaturamento += dia.faturamento;
            diasComFaturamento++;
        }
    });


    let mediaMensal = somaFaturamento / diasComFaturamento;


    let diasAcimaMedia = 0;
    faturamentoDiario.forEach(dia => {
        if (dia.faturamento > mediaMensal) {
            diasAcimaMedia++;
        }
    });


    return {
        menorFaturamento,
        maiorFaturamento,
        diasAcimaMedia
    };
}


let resultado = calcularFaturamento(faturamentoDiario);
console.log(`Menor faturamento: R$ ${resultado.menorFaturamento}`);
console.log(`Maior faturamento: R$ ${resultado.maiorFaturamento}`);
console.log(`Número de dias acima da média: ${resultado.diasAcimaMedia}`);