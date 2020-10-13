function isPrime_v1(numberToBeChecked) {
    let counter = 2;
    while(counter <= (numberToBeChecked / 2)) {
        if(numberToBeChecked % counter === 0) {
            return false;
        }
        counter++;
    }
    return true;
}

function isPrime_v2(numberToBeChecked) {
    let counter = 2;
    while(counter <= Math.sqrt(numberToBeChecked)) {
        if(numberToBeChecked % counter++ === 0) {
            return false;
        }
    }
    return numberToBeChecked > 1;
}

function summationOfPrimes(limit) {
    let counter = 2, sum = 0;
    while(counter < limit) {
        if(isPrime_v2(counter)) {
            sum += counter;
            console.log(counter );
        }
        counter++;
    }
    // if isPrimev2 is used add 4 to the sum idk why tho :(
    return sum;
//    return sum;
}

let limit = 2000000;

let end, start;
    
start = new Date();
console.log(`The sum of all primes below ${limit} = ${summationOfPrimes(limit)}`); // 142913828922
end = new Date(); // 30 sec

console.log('Operation took ' + ((end.getTime() - start.getTime()) / 1000) + ' sec'); 
