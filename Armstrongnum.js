let num = 153;
let sum = 0;

while (num > 0) {
    let lastDigit = num % 10;
    sum = sum + lastDigit ** 3;

    num = (num - lastDigit) / 10;
}

if (sum === 153) {
    console.log("true");
} else {
    console.log("false");
}


// function num(num1, num2){
//     return num1 + num2
// }

// console.log(num(5,6))