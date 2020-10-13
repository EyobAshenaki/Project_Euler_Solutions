function isMultipleOfThree(numberToBeChecked) {
    if (numberToBeChecked % 3 === 0) {
        return true;
    }
    return false;
}

function isMultipleOfFive(numberToBeChecked) {
    if (numberToBeChecked % 5 === 0) {
        return true;
    }
    return false;
}

function sumOfMultipleOfThreeAndFive(limit) {
    let sum = 0;
    for (let index = 1; index < limit; index++) {
        if (isMultipleOfFive(index) || isMultipleOfThree(index)) {
            sum += index;
        }
    }
    return sum;
}

const limit = 1000;
let end, start;

start = new Date();
console.log(`The sum of all the multiples of 3 or 5 bellow ${limit} = ${sumOfMultipleOfThreeAndFive(limit)}`);
end = new Date(); // 9 msec

console.log('Operation took ' + ((end.getTime() - start.getTime())) + ' msec');
