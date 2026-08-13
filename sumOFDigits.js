let num = 12345;
let sum = 0;

for (let i = 1; num > 0; i++){
    let digit = num % 10 ;
    sum = sum + digit;
    num = (num / 10) | 0;
}
console.log(sum)

