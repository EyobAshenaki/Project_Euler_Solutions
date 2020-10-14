function isEven(numberToBeChecked) {
    return numberToBeChecked % 2 === 0;
}

function collatzSequenceGenerator(limit) {
    let collatzSequence = [],
        counter = 1,
        longestCollatz, collatzNumber;
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
        longestCollatz = arrayOfCollatzNumbers.length;
        collatzSequence.push({
            longestCollatz,
            arrayOfCollatzNumbers
        });
        counter++;
    }
    return collatzSequence;
}

function display(limit) {
    let counter = 0,
        largest = 0,
        longCollatz, collatzSequenceObject;
    while (counter < limit) {
        if (largest < collatzSequenceGenerator(limit)[counter].longestCollatz) {
            largest = collatzSequenceGenerator(limit)[counter].longestCollatz;
            longCollatz = collatzSequenceGenerator(limit)[counter].arrayOfCollatzNumbers[0];
            collatzSequenceObject = collatzSequenceGenerator(limit)[counter];
            console.log(counter);
        }
        counter++;
    }

    console.log(`the longest sequence under ${limit} is 
    [${collatzSequenceObject.arrayOfCollatzNumbers}]
    with ${largest} terms which is produced by a starting number of ${longCollatz}`)
}

let end, start;

start = new Date();
display(1000000);
end = new Date(); // it didn't even finish overnight

console.log('Operation took ' + ((end.getTime() - start.getTime()) / 1000) + ' sec');
