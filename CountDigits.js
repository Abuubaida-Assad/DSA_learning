// let num = 12345;
// let count =0;
// for (let i=1; num > 0; i++){
// num = (num/10) | 0;
//     count++;
// }

// console.log(count)


// let N = 12345;
// let count = 0;

// for (let i = 1; N > 0; i++) {
//     N = (N / 10) | 0;
//     count++;
// }

// console.log(count);


// using function

function countDigits(num) {
    let count = 0;
    
    for (let i = 1; num > 0; i++) {
        num = (num / 10) | 0;
        count++;
    }
    return count;
}

console.log(countDigits(12345)); // Output: 5