function isEven(numberToBeChecked) {
    if (numberToBeChecked % 2 === 0) {
        return true;
    }
    return false;
}

function fibonacciSequenceGenerator(limit) {
    let fibonacciNumber_1 = 1,
        fibonacciNumber_2 = 2;
    let fibonacciSequence = [fibonacciNumber_2];

    while (fibonacciNumber_2 < limit) {
        fibonacciSequence.push(fibonacciNumber_1 + fibonacciNumber_2);
        let temp = fibonacciNumber_2;
        fibonacciNumber_2 += fibonacciNumber_1;
        fibonacciNumber_1 = temp;
    }
    fibonacciSequence.pop();
    return fibonacciSequence;
}

function sumOfFibonacciSequenceNotExceeding(limit) {
    return fibonacciSequenceGenerator(limit).reduce((acc, val) => {
        if (isEven(val)) {
            acc += val;
        }
        return acc;
    });
}

const limit = 4000000;
let end, start;

start = new Date();
console.log(`The sum of even-valued Fibonacci sequence terms whose value not exceeding ${limit} = ${sumOfFibonacciSequenceNotExceeding(limit)}`); // 10 msec
end = new Date();

console.log('Operation took ' + ((end.getTime() - start.getTime())) + ' msec');
