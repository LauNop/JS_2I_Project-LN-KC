const ContingencyTable = require('./ContingencyTable');
const jStat = require('jstat');

// Create a contingency table with observed values
const observedValues = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const table = new ContingencyTable(observedValues);

// Calculate the total global of all observed values
const totalGlobal = table.calculateRowSums(observedValues.length - 1); // Last row total is the global total

// Calculate the chi-square value
const chiSquare = table.calculateChiSquare();

// Retrieve the critical chi-square value from the distribution table using JStat
const degreesOfFreedom = (observedValues.length - 1) * (observedValues[0].length - 1);
const significanceLevel = 0.05; // Example significance level of 0.05
const criticalValue = jStat.chisquare.inv(1 - significanceLevel, degreesOfFreedom);

// Compare the chi-square value with the critical chi-square value
const isSignificant = chiSquare > criticalValue;

// Print the results
console.log("Chi-Square Value:", chiSquare);
console.log("Critical Value:", criticalValue);
console.log("Is Significant Difference:", isSignificant);

