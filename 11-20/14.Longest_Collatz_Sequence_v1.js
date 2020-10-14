function isEven(numberToBeChecked) {
    return numberToBeChecked % 2 === 0;
}

function collatzSequenceGenerator(collatzNumber) {
    const arrayOfCollatzNumbers = [collatzNumber];
    while(collatzNumber > 1) {
        if(isEven(collatzNumber)) { 
            collatzNumber /= 2;
            arrayOfCollatzNumbers.push(collatzNumber);
        }
        else {
            collatzNumber = (3 * collatzNumber) + 1;
            arrayOfCollatzNumbers.push(collatzNumber);
        }
    }
    return arrayOfCollatzNumbers;
}

function longestCollatzSequenceFinder(limit) {
    let counter = 1, largest = [], longestCollatz;
    let collatzSequence = [];
    while(counter <= limit) {
        longestCollatz = collatzSequenceGenerator(counter).length;
        collatzSequence = collatzSequenceGenerator(counter).filter(elmt => elmt > 0);
        largest.push({longestCollatz, collatzSequence});
        counter++;
    }
    return largest;
}

function display(limit) {
    let counter = 0, largest = 0, longCollatz, collatzSequenceObject;
    while(counter < limit) {
        if(largest < longestCollatzSequenceFinder(limit)[counter].longestCollatz) {
            largest = longestCollatzSequenceFinder(limit)[counter].longestCollatz;
            longCollatz = longestCollatzSequenceFinder(limit)[counter].collatzSequence[0];
            collatzSequenceObject = longestCollatzSequenceFinder(limit)[counter];
            console.log(counter);
        }
        counter++;
    }
    
    console.log(`the longest sequence under ${limit} is 
    [${collatzSequenceObject.collatzSequence}]
    with ${largest} terms which is produced by a starting number of ${longCollatz}`)
}

let end, start;
    
start = new Date();
display(10000);
end = new Date(); // 13 sec

console.log('Operation took ' + ((end.getTime() - start.getTime()) / 1000) + ' sec');






