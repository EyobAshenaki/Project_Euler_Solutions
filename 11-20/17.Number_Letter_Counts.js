let start, end;

start = new Date();

const arrayOfLettersOfNumbers = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eigth', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

const arrayOfLetterOfNumbers1 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
// hundred  thousand and

let letterOfNumbers = arrayOfLettersOfNumbers.join('');

function numOfLettersOfNumbers1_to_100() {
    let str = letterOfNumbers;
    for (let i = 20; i < 100; i++) {
        if (i < 30) str += (arrayOfLetterOfNumbers1[0] + arrayOfLettersOfNumbers[i - 20]);
        else if (i < 40) str += (arrayOfLetterOfNumbers1[1] + arrayOfLettersOfNumbers[i - 30]);
        else if (i < 50) str += (arrayOfLetterOfNumbers1[2] + arrayOfLettersOfNumbers[i - 40]);
        else if (i < 60) str += (arrayOfLetterOfNumbers1[3] + arrayOfLettersOfNumbers[i - 50]);
        else if (i < 70) str += (arrayOfLetterOfNumbers1[4] + arrayOfLettersOfNumbers[i - 60]);
        else if (i < 80) str += (arrayOfLetterOfNumbers1[5] + arrayOfLettersOfNumbers[i - 70]);
        else if (i < 90) str += (arrayOfLetterOfNumbers1[6] + arrayOfLettersOfNumbers[i - 80]);
        else str += (arrayOfLetterOfNumbers1[7] + arrayOfLettersOfNumbers[i - 90]);
    }
    return str.length;
}

function numberOfLetterOfNumbers1_to_1000() {
    let letterCounter = numOfLettersOfNumbers1_to_100(),
        temp = '',
        and = 'and';
    for (let i = 100; i <= 1000; i += 100) {
        if (i < 200) {
            temp = 'onehundred';
            letterCounter += ((temp.length * 100) + (and.length * 99) + numOfLettersOfNumbers1_to_100());
        } else if (i < 300) {
            temp = 'twohundred';
            letterCounter += ((temp.length * 100) + (and.length * 99) + numOfLettersOfNumbers1_to_100());
        } else if (i < 400) {
            temp = 'threehundred';
            letterCounter += ((temp.length * 100) + (and.length * 99) + numOfLettersOfNumbers1_to_100());
        } else if (i < 500) {
            temp = 'fourhundred';
            letterCounter += ((temp.length * 100) + (and.length * 99) + numOfLettersOfNumbers1_to_100());
        } else if (i < 600) {
            temp = 'fivehundred';
            letterCounter += ((temp.length * 100) + (and.length * 99) + numOfLettersOfNumbers1_to_100());
        } else if (i < 700) {
            temp = 'sixhundred';
            letterCounter += ((temp.length * 100) + (and.length * 99) + numOfLettersOfNumbers1_to_100());
        } else if (i < 800) {
            temp = 'sevenhundred';
            letterCounter += ((temp.length * 100) + (and.length * 99) + numOfLettersOfNumbers1_to_100());
        } else if (i < 900) {
            temp = 'eighthundred';
            letterCounter += ((temp.length * 100) + (and.length * 99) + numOfLettersOfNumbers1_to_100());
        } else if (i < 1000) {
            temp = 'ninehundred';
            letterCounter += ((temp.length * 100) + (and.length * 99) + numOfLettersOfNumbers1_to_100());
        } else {
            temp = 'onethousand';
            letterCounter += temp.length;
        }
    }
    return letterCounter;
}

console.log(`If all numbers from 1 tp 1000 were written out in words, "${numberOfLetterOfNumbers1_to_1000()}" letters would be used.`);
end = new Date();

console.log('Operation took ' + ((end.getTime() - start.getTime())) + ' msec');

