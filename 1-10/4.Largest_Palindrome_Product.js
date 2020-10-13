function isPalindrome(toBeChecked) {
    if (toBeChecked.toString().toLocaleLowerCase() === Array.from(toBeChecked.toString()).reverse().join('').toLocaleLowerCase()) {
        return true;
    }
    return false;
}

function PalindromeProducts(numberOfDigit) {
    const arr = new Array(numberOfDigit);
    let value = parseInt(arr.fill(9).join(''));
    let counter = value
    let palindromeProducts = [];
    let palindromeProductNums = [];
    while (counter) {
        temp = value;
        while (temp) {
            const product = value * temp;
            if (isPalindrome(product)) {
                palindromeProductNums.push({
                    value,
                    temp
                })
                palindromeProducts.push(product);
            }
            temp--;
        }
        value--;
        counter--;
    }
    return {
        palindromeProducts,
        palindromeProductNums
    };
}

function display(arrayOfPalindromeObjects, limit) {
    const largestPalindromeProduct = arrayOfPalindromeObjects.palindromeProducts.reduce((acc, val) => {
        if (val > acc) {
            acc = val;
        }
        return acc;
    });

    const index = arrayOfPalindromeObjects.palindromeProducts.indexOf(largestPalindromeProduct);

    console.log(`The largest palindrome made from the product of two ${limit}-digit numbers is ${largestPalindromeProduct} = ${arrayOfPalindromeObjects.palindromeProductNums[index].value} x ${arrayOfPalindromeObjects.palindromeProductNums[index].temp} `);
}

const limit = 3;
let end, start;

start = new Date();
display(PalindromeProducts(limit), limit); // 530 msec
end = new Date();

console.log('Operation took ' + ((end.getTime() - start.getTime())) + ' msec');
