function sumOfArray(arrayToBeAdded) {
    return arrayToBeAdded.reduce((acc, cur) => acc + cur, 0);
}

function factorsFinder(number) {
    let counter = 2, factors = [1];
    while(counter < Math.sqrt(number)) {
        if(number % counter === 0) {
            factors.push(counter, (number/counter));
        }
        counter++;
    }
    
    return factors.sort((a, b) => a - b);
} 

function amicableNumbersFinder(limit) {
    const arrayOfAmicableNumbers = [];
    for (let i = 0; i < 10000; i++) {
        let num = sumOfArray(factorsFinder(i));
        if(sumOfArray(factorsFinder(num)) === i && num !== i) {
            if(arrayOfAmicableNumbers.indexOf(i) === -1) arrayOfAmicableNumbers.push(i); 
        }
    }
    return arrayOfAmicableNumbers;
}

const limit = 10000;

console.log(`The sum of all the amicable numbers " ${amicableNumbersFinder(limit)} " under ${limit} = ${sumOfArray(amicableNumbersFinder(limit))}`);
