
function add(numbers) {
    return numbers
        .split(',')
        .map(x => parseInt(x))
        .reduce((a, b) => a + b)
}

exports.add = add;

function multiply(numbers) {
    return numbers
        .split(',')
        .map(x => parseInt(x))
        .reduce((a, b) => a*b)
}

exports.multiply = multiply;

function division(numbers)
{
    return numbers
    .split(',')
    .map(x => parseInt(x))
    .reduce((a, b) => a/b)
}
exports.division = division;