let start, end;

start = new Date();

class Year {
    constructor(timeOfYear, isLeapYear) {
        this.timeOfYear = timeOfYear;
        this.isLeapYear = isLeapYear;
        if (isLeapYear) {
            this.numOfDays = 365;
        } else {
            this.numOfDays = 364;
        }
        this.numOfMonths = 12;
        this.months = [];
    }
    addMonth(newMonth) {
        if (this.months.length < this.numOfMonths) this.months.push(newMonth);
        else console.log('month overflow');
    }
}

class Month {
    constructor(nameOfMonth, isLeapYear) {
        this.nameOfMonth = nameOfMonth;
        if (nameOfMonth === 'April' || nameOfMonth === 'June' || nameOfMonth === 'September' || nameOfMonth === 'November') {
            this.numOfDays = 30;
        } else if (nameOfMonth === 'February') {
            if (isLeapYear) this.numOfDays = 29;
            else this.numOfDays = 28;
        } else {
            this.numOfDays = 31;
        }
        this.days = []
    }
    addDay(newDay) {
        if (this.days.length < this.numOfDays) this.days.push(newDay);
    }
}

const days = ['Monday', 'Tuesday', 'Wensday', 'Tursday', 'Friday', 'Satrday', 'Sunday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Augest', 'September', 'October', 'November', 'Decmber'];

let arrayOfYears = [];
let isLeapYear;
let daysCounter = 0;

for (let i = 1900; i <= 2000; i++) {
    if (i % 100 === 0 && i % 400 === 0) {
        isLeapYear = true;
    } else if (i % 4 === 0 && i % 100 !== 0) {
        isLeapYear = true;
    } else {
        isLeapYear = false;
    }

    const year = new Year(i, isLeapYear);
    let monthCounter = 0;

    while (monthCounter < months.length) {
        const month = new Month(months[monthCounter], isLeapYear);
        let counter = 0;

        while (counter <= month.numOfDays) {
            if (daysCounter > 6) daysCounter -= 7;
            month.addDay(days[daysCounter]);
            counter++;
            daysCounter++;
        }
        daysCounter--;
        year.addMonth(month);
        monthCounter++;
    }

    arrayOfYears.push(year);
}

arrayOfYears.shift();

let sundayFirstCounter = 0,
    sundayTotalCounter = 0;

for (let i = 0; i < arrayOfYears.length; i++) {
    for (let j = 0; j < arrayOfYears[i].months.length; j++) {
        for (let k = 0; k < arrayOfYears[i].months[j].days.length; k++) {
            if (arrayOfYears[i].months[j].days[k] === 'Sunday') sundayTotalCounter++;
        }
        if (arrayOfYears[i].months[j].days[0] === 'Sunday') sundayFirstCounter++;
    }

}

console.log(`Out of the total ${sundayTotalCounter} sundays during the twentieth century (1 Jan 1901 to 31 Dec 2000), ${sundayFirstCounter} fell on the first of the month.`);
end = new Date();

console.log('Operation took ' + ((end.getTime() - start.getTime())) + ' msec');
