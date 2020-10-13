function sumOfSquares(start, end) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += (i * i);
    }
    return sum;
}

function squareOfSum(start, end) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return (sum * sum);
}

const begin = 1,
    finish = 100
const sumSquareDifference = squareOfSum(begin, finish) - sumOfSquares(begin, finish);

let end, start;

start = new Date();
console.log(`The difference between the sum of squares of the first one hundred natural numbers and the square of the sum is ${squareOfSum(begin, finish)} - ${sumOfSquares(begin, finish)} = ${sumSquareDifference}`); // 10 msec
end = new Date();

console.log('Operation took ' + ((end.getTime() - start.getTime())) + ' msec');
