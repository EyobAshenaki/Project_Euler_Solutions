// faster than 1st version by double i think ;)
function primeNumbersGenerator(limit) {
    let primeNumbers = [];
    let counter = 2;
    
    while(counter <= limit) {
        primeNumbers.push(counter++);
    }
    counter = 2;
    
    while((counter*counter) < limit) {
        primeNumbers = primeNumbers.filter(elmt => (elmt % counter !== 0 || elmt === counter));
        counter++
    }
    
    return primeNumbers;
}

function summationOfPrimes(arrayToBeAdded) {
    return arrayToBeAdded.reduce((acc, cur) => acc + cur);
}

const limit = 2000000;

let end, start;
    
start = new Date();
console.log(`The sum of all primes below ${limit} = ${summationOfPrimes(primeNumbersGenerator(limit))}`); // 142913828922
end = new Date(); // 13 sec

console.log('Operation took ' + ((end.getTime() - start.getTime()) / 1000) + ' sec');