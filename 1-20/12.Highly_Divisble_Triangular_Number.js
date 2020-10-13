function factorsGenerator(limit) {
    let counter = 0;
    const factors = [];
    while(counter < (limit / 2)) {
        if(limit === 1) factors.push(1);
        if(limit % counter === 0 && factors.indexOf(counter) < 0) {
            factors.push(counter);
            if(counter !== (limit/counter)) factors.push(limit / counter);
        }
        counter++;
    }
    return factors.sort((a, b) => a - b);
}

function triangularNumberGenerator(idx) {
    let counter = 0, triangularNumber = 0;
    // adds conseqative numbers from 1 to idx
    triangularNumber = (idx / 2) * (1 + idx);
//    while(counter <= idx) {
//        triangularNumber += counter;
//        counter++;
//    }
    return triangularNumber;
 }

function firstTriangleNumberFinder(factorLimit) {
    let index = 1
    while(true) {
        const triangleNumber = triangularNumberGenerator(index);
        numberOfFactors = factorsGenerator(triangleNumber).length;
        console.log(numberOfFactors);
        if(numberOfFactors >= factorLimit) return [triangleNumber, numberOfFactors];
        index++;
     } 
}
 
let limit = 500; // 400 -> 17907120 14.45 mins 500 -> 76576500


let start, end;

start = new Date();
console.log(`The first triangular number with more than ${limit} exactly ${firstTriangleNumberFinder(limit)[1]} divisors = ${firstTriangleNumberFinder(limit)[0]} `); // took 61.4 mins
end = new Date();

console.log('Operation took ' + ((end.getTime() - start.getTime()) / 60000) + ' mins'); 
//console.log(factorsGenerator(25))

