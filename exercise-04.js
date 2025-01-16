// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
// • SP – R$67.836,43
// • RJ – R$36.678,66
// • MG – R$29.229,88
// • ES – R$27.165,48
// • Outros – R$19.849,53

// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.  


let revenueByState = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Others": 19849.53
};

function calculatePercentages(revenueByState) {
    let totalRevenue = Object.values(revenueByState).reduce((acc, value) => acc + value, 0);

    let percentages = {};
    for (let state in revenueByState) {
        let percentage = (revenueByState[state] / totalRevenue) * 100;
        percentages[state] = percentage.toFixed(2);
    }

    return percentages;
}

let statePercentages = calculatePercentages(revenueByState);

for (let state in statePercentages) {
    console.log(`Percentage of ${state}: ${statePercentages[state]}%`);
}