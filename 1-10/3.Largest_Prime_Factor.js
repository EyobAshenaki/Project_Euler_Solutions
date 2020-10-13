function isPrime(numberToBeChecked) {
    let counter = 2;
    while (counter < numberToBeChecked) {
        if (numberToBeChecked % counter === 0) {
            return false;
        }
        counter++;
    }
    return true;
}

function primeFactorsGenerator(limit) {
    let primeFactors = [];
    let counter = 2;
    while (counter <= limit) {
        if (isPrime(counter) && limit % counter === 0) {
            primeFactors.push(counter);
            limit /= counter;
        } else {
            counter++;
        }
    }
    return primeFactors;
}

const limit = 600851475143
const biggest = primeFactorsGenerator(limit).reduce((acc, val) => val > acc ? val : acc); // 10 msec

let end, start;

start = new Date();
console.log(`The largest prime factor of ${limit} = ${biggest}`); // 30 sec
end = new Date();

console.log('Operation took ' + ((end.getTime() - start.getTime())) + ' msec');
