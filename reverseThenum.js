let num = 12321
let reversed = 0

while (num > 0) {
    let lastDigit = num % 10;
    reversed = reversed * 10 + lastDigit;
    num = (num - lastDigit) / 10;
}

if (num === palindrome) {
    console.log("true");
} else {
    console.log("false");
}

console.log(reversed);
