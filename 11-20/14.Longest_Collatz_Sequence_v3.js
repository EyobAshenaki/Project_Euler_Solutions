function isEven(numberToBeChecked) {
    return numberToBeChecked % 2 === 0;
}

function collatzSequenceGenerator(limit) {
    let collatzSequence = [],
        counter = 1,
        normalCollatz = 0,
        longestCollatz = 0,
        collatzNumber = 0;
    while (counter <= limit) {
        collatzNumber = counter;
        let arrayOfCollatzNumbers = [collatzNumber];
        while (collatzNumber > 1) {
            if (isEven(collatzNumber)) {
                collatzNumber /= 2;
                arrayOfCollatzNumbers.push(collatzNumber);
            } else {
                collatzNumber = (3 * collatzNumber) + 1;
                arrayOfCollatzNumbers.push(collatzNumber);
            }
        }
        normalCollatz = arrayOfCollatzNumbers.length;
        if (normalCollatz > longestCollatz) {
            longestCollatz = normalCollatz;
            collatzSequence.pop();
            collatzSequence.push({
                longestCollatz,
                arrayOfCollatzNumbers
            });
        }
        counter++;
    }
    return collatzSequence;
}

const limit = 1000000;
let end, start;

start = new Date();
//console.log(`the longest sequence under ${limit} is 
//    [${collatzSequenceGenerator(limit)[0].arrayOfCollatzNumbers}]
//    with ${collatzSequenceGenerator(limit)[0].longestCollatz} terms, which is produced by a starting number of ${collatzSequenceGenerator(limit)[0].arrayOfCollatzNumbers[0]}`); // 8.2 sec
console.log(`the longest sequence under ${limit} has ${collatzSequenceGenerator(limit)[0].longestCollatz} terms, which is produced by a starting number of ${collatzSequenceGenerator(limit)[0].arrayOfCollatzNumbers[0]}`); // 5.4 sec
end = new Date();

console.log('Operation took ' + ((end.getTime() - start.getTime()) / 1000) + ' sec');
