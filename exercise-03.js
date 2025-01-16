// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;


let dailyRevenue = [
    { day: 1, revenue: 200 },
    { day: 2, revenue: 150 },
    { day: 3, revenue: 0 },
    { day: 4, revenue: 300 },
    { day: 5, revenue: 100 },
    { day: 6, revenue: 0 },
    { day: 7, revenue: 250 },
    { day: 8, revenue: 400 },
    { day: 9, revenue: 500 },
    { day: 10, revenue: 0 }
];

function calculateRevenue(dailyRevenue) {
    let lowestRevenue = Infinity;
    let highestRevenue = -Infinity;
    let totalRevenue = 0;
    let daysWithRevenue = 0;

    dailyRevenue.forEach(day => {
        if (day.revenue > 0) {
            if (day.revenue < lowestRevenue) {
                lowestRevenue = day.revenue;
            }
            if (day.revenue > highestRevenue) {
                highestRevenue = day.revenue;
            }
            totalRevenue += day.revenue;
            daysWithRevenue++;
        }
    });

    let monthlyAverage = totalRevenue / daysWithRevenue;

    let daysAboveAverage = 0;
    dailyRevenue.forEach(day => {
        if (day.revenue > monthlyAverage) {
            daysAboveAverage++;
        }
    });

    return {
        lowestRevenue,
        highestRevenue,
        daysAboveAverage
    };
}

let result = calculateRevenue(dailyRevenue);
console.log(`Lowest revenue: R$ ${result.lowestRevenue}`);
console.log(`Highest revenue: R$ ${result.highestRevenue}`);
console.log(`Number of days above the average: ${result.daysAboveAverage}`);