let start, end;

start = new Date();

let product = 1n;

counter = 0
while (counter < 10) {
    product *= BigInt(Math.pow(2, 100));
    counter++;
}

const str = product.toString();

let arrayOfNumbers = str.split('');

console.log(`The sum of the digits of the number "2 the power of 1000" which is ${str} = ${arrayOfNumbers.reduce((acc, cur) => acc += parseInt(cur), 0)}`);
end = new Date();

console.log('Operation took ' + ((end.getTime() - start.getTime())) + ' msec');
