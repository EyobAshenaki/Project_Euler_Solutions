// (n+n)!/(n!*((n+n)-n)!)

function factorial(number) {
    let counter = 1,
        product = 1;
    while (counter <= number) {
        product *= counter;
        counter++;
    }
    return product;
}

function numberOfGridPathFinder(width, length) {
    return (factorial(width + length) / (factorial(width) * factorial(length)));
}

let start, end;

start = new Date();
console.log(`there are ${numberOfGridPathFinder(20, 20)} routes through a 20 x 20 grid`);
end = new Date();

console.log('Operation took ' + ((end.getTime() - start.getTime())) + ' msec');
