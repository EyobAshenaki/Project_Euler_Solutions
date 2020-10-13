function isRangeMultiple(value, start, end) {
    for (let i = start; i <= end; i++) {
        if (value % i !== 0) return false;
    }
    return true;
}

function smallestRangeMultiple(start, end) {
    let counter = 1;
    while (true) {
        if (isRangeMultiple(counter, start, end)) return counter;
        //        console.log(counter);
        counter++;
    }
}

// console.log(smallestRangeMultiple(1, 20)); // 1-30 -> 6284920

const begin = 1,
    finish = 20;
let end, start;

start = new Date();
console.log(`The smallest number that is evenly divisble by all of the numbers from ${begin} to ${finish} = ${smallestRangeMultiple(begin, finish)}`); // 3.5 sec
end = new Date();

console.log('Operation took ' + ((end.getTime() - start.getTime()) / 1000) + ' sec');
