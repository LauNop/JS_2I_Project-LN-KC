class ContingencyTable {
    constructor(observedValues) {
        this.observedValues = observedValues;
    }

    // Calculate the sum of each row
    calculateRowSums(row) {
        let total = 0;
        for (let value of this.observedValues[row]) {
            total += value;
        }
        return total;
    }

    // Calculate the sum of each column
    calculateColumnSums(column) {
        let total = 0;
        for (let row of this.observedValues) {
            total += row[column];
        }
        return total;
    }

    // Calculate the total count of cells in the contingency table
    calculateTotalCells() {
        let totalCount = 0;
        for (let row of this.observedValues) {
            totalCount += row.length;
        }
        return totalCount;
    }

    // Calculate the expected frequency for each cell
    calculateExpectedFrequency(row, column, totalGlobal) {
        const rowTotal = this.calculateRowSums(row);
        const columnTotal = this.calculateColumnSums(column);
        return (rowTotal * columnTotal) / totalGlobal;
    }

    // Calculate the expected values for each cell
    calculateExpectedValues(totalGlobal) {
        const rowCount = this.observedValues.length;
        const columnCount = this.observedValues[0].length;
        const totalCells = this.calculateTotalCells();

        const expectedValues = [];

        for (let row = 0; row < rowCount; row++) {
            const rowValues = [];
            for (let column = 0; column < columnCount; column++) {
                const expectedFrequency = this.calculateExpectedFrequency(
                    row,
                    column,
                    totalGlobal
                );
                const expectedValue = expectedFrequency * totalCells;
                rowValues.push(expectedValue);
            }
            expectedValues.push(rowValues);
        }

        return expectedValues;
    }

    // Calculate the chi-square value
    calculateChiSquare() {
        const rowCount = this.observedValues.length;
        const columnCount = this.observedValues[0].length;

        const totalGlobal = this.calculateRowSums(rowCount - 1); // Last row total is the global total

        const expectedValues = this.calculateExpectedValues(totalGlobal);

        let chiSquare = 0;

        for (let row = 0; row < rowCount - 1; row++) {
            for (let column = 0; column < columnCount; column++) {
                const observedValue = this.observedValues[row][column];
                const expectedValue = expectedValues[row][column];
                chiSquare += Math.pow(observedValue - expectedValue, 2) / expectedValue;
            }
        }

        return chiSquare;
    }

    // Compare the calculated chi-square value with the critical chi-square value
    isSignificantDifference(criticalValue) {
        const chiSquare = this.calculateChiSquare();
        return chiSquare > criticalValue;
    }
}

module.exports = ContingencyTable;


