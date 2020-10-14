let start, end;

start = new Date();

function factorial(number) {
    let counter = BigInt(1),
        product = BigInt(1);
    while (counter <= number) {
        product *= counter;
        counter++;
    }
    return product;
}

function factorialDigitSumFinder(factorial) {
    let factorialDigits = factorial.toString().split('');
    let sum = 0;

    for (let i = 0; i < factorialDigits.length; i++) {
        sum += parseInt(factorialDigits[i]);
    }
    return sum;
}

const limit = 100;

console.log(`The sum of the digits of factorial "${limit}" = ${factorialDigitSumFinder(factorial(limit))}`);

end = new Date();

console.log('Operation took ' + ((end.getTime() - start.getTime())) + ' msec');