let num = 12345;
let reverse =0;
for (let i = 1; num > 0; i++){
    let digit = num % 10;
    reverse = reverse * 10 + digit;
    num = (num/10) | 0;
}
console.log(reverse);

