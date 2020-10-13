// this is not the soln the 1st version was correct this is what the soln wod look like if the product had to be 4 digit number
const series = '7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450';

let arr = Array.from(series);

function productOfArray(arrayToBeMultiplied) {
    let product = 1;
    for (let i = 0; i < arrayToBeMultiplied.length; i++) {
        product *= arrayToBeMultiplied[i];
    }
    return product;
}

function largestNDigitProductFinder(inputArray, numOfDigit) {
    let product = 0;
    let productNums = [];
    const arrayOfProducts = [];
    const size = inputArray.length - numOfDigit
    for (let index = 0; index <= size; index++) {
        //        product = parseInt(product);
        // tempArray stores the numbers to be multiplied
        const tempArray = inputArray.splice(0, numOfDigit);
        const tempNum = productOfArray(tempArray);
        let tempArray1 = [];
        // this while loop returns the spliced elments back into input array and creates another array to store the spliced elements.
        while (tempArray.length) {
            const delNum = tempArray.pop();
            inputArray.unshift(delNum);
            tempArray1.unshift(delNum);
        }
        // removes the first element of the original array
        inputArray.shift();
        // to see how many 4 digit numbers are there
        //        if(tempNum.toString().length === 4) arrayOfProducts.push(tempNum);
        // asssignes the product with greater num of 4 digits if present. 
        if (tempNum > product && tempNum.toString().length === 4) {
            product = tempNum;
            // just to copy one array into another for display
            productNums = tempArray1.filter((value) => value > 0);
        }
    }
    return {
        productNums,
        product,
        arrayOfProducts
    };
}

function display(objectToBeDisplayed) {
    const numbersToBeMultiplied = objectToBeDisplayed.productNums.join(' x ');
    const finalResult = objectToBeDisplayed.product;
    console.log(`The ${limit} adjacent digits in the 1000-digit number that have the greatest product is ${numbersToBeMultiplied} with the value of ${finalResult}`);
}

//console.log(largestNDigitProductFinder(arr, 13).arrayOfProducts);

const limit = 13;
let end, start;

start = new Date();
display(largestNDigitProductFinder(arr, limit), limit); // 24 msec
end = new Date();

console.log('Operation took ' + ((end.getTime() - start.getTime())) + ' msec');
