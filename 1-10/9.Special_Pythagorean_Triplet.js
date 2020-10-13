function specialPythagoreanTripletGenerator(index) {
    const arrayOfPythagoreanTriplets = [];
    let a = 2,
        b = 2,
        c = 0;
    let checker = true;
    while ((a + b + c) <= index) {
        //        console.log(`${a} - ${b} - ${c}`);
        while (checker) {
            aSquare = Math.pow(a, 2);
            bSquare = Math.pow(b, 2);
            cSquare = aSquare + bSquare;
            c = Math.sqrt(cSquare);
            //            console.log(`${a} - ${b} - ${c}`);
            if (Number.isInteger(c)) {
                arrayOfPythagoreanTriplets.push({
                    a,
                    b,
                    c
                });
                //                console.log(`${a} - ${b} - ${c}`);
            }
            if ((a + b + c) >= index) checker = false;
            a++;
        }
        b++;
        a = 2;
        checker = true;
    }
    return arrayOfPythagoreanTriplets;
}

function display(arrayOfObjects) {
    let idx = 0
    arrayOfObjects.forEach((obj, index) => {
        if ((obj.a + obj.b + obj.c) === 1000) {
            idx = index;
        }
    });

    const productOfSpecialPythagoreanTriplet = arrayOfObjects.reduce((acc, val) => {
        if ((val.a + val.b + val.c) === 1000) {
            acc = val.a * val.b * val.c;
        }
        return acc;
    }); // took like 10 msec

    console.log(`The only Pythagorean triplet (a2 + b2 = c2) for which a + b + c = 1000 is ${specialPythagoreanTripletGenerator(1000)[idx].a}, ${specialPythagoreanTripletGenerator(1000)[idx].b}, ${specialPythagoreanTripletGenerator(1000)[idx].c} with a product of ${productOfSpecialPythagoreanTriplet}`);
}

let end, start;

start = new Date();
display(specialPythagoreanTripletGenerator(1000)); // 30 msec
end = new Date();

console.log('Operation took ' + ((end.getTime() - start.getTime())) + ' msec');
