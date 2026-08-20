let num = 12345;
let reverse =0;
for (let i = 1; num > 0; i++){
    let digit = num % 10;
    reverse = reverse * 10 + digit;
    num = (num/10) | 0;
}
console.log(reverse);

function reverseNumber(n) {
    let reverse = 0;
    for (let i = 1; n > 0; i++) {
        let digit = n % 10;
        reverse = reverse * 10 + digit;
        n = (n / 10) | 0;
    }
    return reverse;
}

console.log(reverseNumber(12345)); // Output: 54321