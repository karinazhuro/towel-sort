// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!arguments.length) return [];

    matrix.map((arr, index) => {
        if (index % 2 !== 0) arr.reverse();
    });

    return matrix.flat();
}
