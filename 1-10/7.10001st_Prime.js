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

function primeGenerator(index) {
    let primeNumber = 0,
        counter = 2,
        primeNumberCounter = 0;
    while (true) {
        if (isPrime(counter)) {
            primeNumber = counter;
            primeNumberCounter++;
        }
        if (primeNumberCounter === index) return primeNumber;
        counter++;
    }
}

const limit = 10001;
let end, start;

start = new Date();
console.log(`the ${limit} prime number = ${primeGenerator(limit)}`); // 2.6 sec
end = new Date();

console.log('Operation took ' + ((end.getTime() - start.getTime()) / 1000) + ' sec');
