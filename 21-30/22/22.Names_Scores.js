let names;

fs = require('fs');
fs.readFile('p022_names.txt', 'utf8', (err, data) => {
    if (err) return console.log(err);
    names = data;
    names = names.replace(/"/g, '');

let arrayOfNames = names.split(',');

arrayOfNames.sort();

let arrayOfNameScore = []
for (let i = 0; i < arrayOfNames.length; i++) {
    let tempStr = arrayOfNames[i];
    let sum = 0;
    for (let j = 0; j < tempStr.length; j++) {
        sum += tempStr.charCodeAt(j) - 64;
    }
    arrayOfNameScore.push(sum * (i+1))
}

console.log(arrayOfNameScore.reduce((acc, cur) => acc + cur));
})

