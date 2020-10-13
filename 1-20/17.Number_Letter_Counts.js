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

//var lenHundred = 7;
//var lenThousand = 8;
//var lenPlaceOnes = [0, 3, 3, 5, 4, 4, 3, 5, 5, 4];
//var lenPlaceTens = [0, 3, 6, 6, 5, 5, 5, 7, 6, 6];
//
//function sumTo(num) {
//    var sum = 0;
//
//    for (var i = 1; i <= num; i++) {
//        var placeOnes = i % 10;
//        var placeTens = Math.floor(i / 10) % 10;
//        var placeHundreds = Math.floor(i / 100) % 10;
//        var placeThousands = Math.floor(i / 1000) % 10;
//
//        // Add the ones place
//        sum += lenPlaceOnes[placeOnes];
//
//        // Add the tens place
//        sum += lenPlaceTens[placeTens];
//        // If the hundreds place is non-zero, add it and "hundred"
//        if (placeHundreds != 0) {
//            sum += lenHundred + lenPlaceOnes[placeHundreds];
//        }
//
//        // If the thousands place is non-zero, add it and "thousand"
//        if (placeThousands != 0) {
//            sum += lenThousand + lenPlaceOnes[placeThousands];
//        }
//
//        ////////////////
//        // TEENS RULE //
//        ////////////////
//
//        // If the number is in the teens, take care of special numbers
//        // Eleven is the same length as "oneten", Twelve the same as "twoten", and so on
//        // With the exception of those in the switch statement
//        if (placeTens == 1) {
//            // If the ones place is 4, 6, 7, or 9, add an extra 1 for the "e"
//            switch (placeOnes) {
//                case 4:
//                case 6:
//                case 7:
//                case 9:
//                    sum += 1;
//                    break;
//            }
//        }
//
//        //////////////
//        // AND RULE //
//        //////////////
//        // If the value is above one hundred, and the number is not an exact hundred, add
//        // 3 for the "and"
//        if (i > 100 && i % 100 != 0) {
//            sum += 3;
//        }
//    }
//
//    return sum;
//}
//
//console.log("Sum to 1H Inclusive: " + sumTo(100));
//console.log("Sum to 1K Inclusive: " + sumTo(1000));

var baseNumbers = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

var teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

var baseTens = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

var countLettersCountingToOneThousand = function () {
    var count = 0;

    //1-9
    for (var i = 0; i < baseNumbers.length; i++) {
        var baseNumber = baseNumbers[i];
        count += baseNumber.length;
    }

    //10-19
    for (var i = 0; i < teens.length; i++) {
        var teen = teens[i];
        count += teen.length;
    }

    //20-99
    for (var i = 0; i < baseTens.length; i++) {
        var baseTen = baseTens[i];
        for (var j = 0; j < baseNumbers.length; j++) {
            var baseNumber = baseNumbers[j];
            count += baseTen.length + baseNumber.length;
        }
    }

    var oneToOneHundred = count;

    //100-999
    for (var i = 1; i < baseNumbers.length; i++) {
        var hundredsPrefix = baseNumbers[i] + "hundred";

        count += hundredsPrefix.length;
        count += oneToOneHundred;
        count += 99 * (hundredsPrefix + "and").length;
    }

    //1000
    count += "onethousand".length;

    return count;
};


console.log(countLettersCountingToOneThousand());
