let start, end;

start = new Date();

const str = '75 95 64 17 47 82 18 35 87 10 20 04 82 47 65 19 01 23 75 03 34 88 02 77 73 07 63 67 99 65 04 28 06 16 70 92 41 41 26 56 83 40 80 70 33 41 48 72 33 47 32 37 16 94 29 53 71 44 65 25 43 91 52 97 51 14 70 11 33 28 77 73 17 78 39 68 17 57 91 71 52 38 17 14 91 43 58 50 27 29 48 63 66 04 68 89 53 67 30 73 16 69 87 40 31 04 62 98 27 23 09 70 98 73 93 38 53 60 04 23';

let arr = str.split(' ');
// console.log(arr.length);
let arrayOfArr = [];
// make it general for any number and any height not just 15
for (let i = 0; i < 15; i++) {
    let tempArr = [];
    for (let j = 0; j <= i; j++) {
        tempArr.push(parseInt(arr[0]));
        arr.shift();
    }
    arrayOfArr.push(tempArr);
}

const size = arrayOfArr.length;
for (let i = 0; i < size-1; i++) {
    let aboveBottomArray = arrayOfArr[arrayOfArr.length-2];
    let bottomArray = arrayOfArr[arrayOfArr.length-1];
    for (let i = 0; i < bottomArray.length-1; i++) {
        aboveBottomArray.splice(i, 1, aboveBottomArray[i] + Math.max(bottomArray[i], bottomArray[i+1]));
    }
    arrayOfArr.pop();
}

const largestSum = arrayOfArr[0][0];

console.log(`The maximum total from top to bottom of the triangle in question = ${largestSum}`);

end = new Date();

console.log('Operation took ' + ((end.getTime() - start.getTime())) + ' msec');
