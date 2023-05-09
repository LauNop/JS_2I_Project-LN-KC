const jStat = require('jstat');

// Fonction pour le test chi-square qui prend en entrée un tableau de contingence et renvoie la valeur de chi-carré et la p-valeur.

function chiSquare(tableauContingence) {
    // Calculer les totaux de ligne et de colonne.
    const rowSums = tableauContingence.map(row => row.reduce((acc, curr) => acc + curr));
    const colSums = tableauContingence[0].map((_, colIndex) => tableauContingence.reduce((acc, curr) => acc + curr[colIndex], 0));

    // Calculer le total global et le nombre de cellules.
    const total = rowSums.reduce((acc, curr) => acc + curr);
    const numCells = rowSums.length * colSums.length;

    // Calculer les fréquences attendues pour chaque cellule.
    const expected = [];
    for (let i = 0; i < rowSums.length; i++) {
        const rowExpected = [];
        for (let j = 0; j < colSums.length; j++) {
            rowExpected.push((rowSums[i] * colSums[j]) / total);
        }
        expected.push(rowExpected);
    }

    // Calculer la valeur de chi-carré.
    let chiSquareValue = 0;
    for (let i = 0; i < rowSums.length; i++) {
        for (let j = 0; j < colSums.length; j++) {
            const observed = tableauContingence[i][j];
            const expectedVal = expected[i][j];
            chiSquareValue += ((observed - expectedVal) ** 2) / expectedVal;
        }
    }

    // Trouver la p-valeur à partir de la distribution de chi-carré.
    const df = (rowSums.length - 1) * (colSums.length - 1);
    const pValue = jStat.chisquare.sf(chiSquareValue, df);


    // Retourner la valeur de chi-carré et la p-valeur.
    return { chiSquareValue, pValue };
}

const tableauContingence = [
    [15, 20, 10],
    [10, 30, 25],
    [5, 15, 20]
];

const resultatsTestChiSquare = chiSquare(tableauContingence);

console.log("Résultats du test chi-square:");
console.log("Valeur de chi-carré:", resultatsTestChiSquare.chiSquareValue);
console.log("p-valeur:", resultatsTestChiSquare.pValue);
