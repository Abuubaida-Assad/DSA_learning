// let n = 121;
// let original = 1;
// let reverse = 0;
// for (let i=1; n>0; i++){
//     let digit = n % 10;
//     reverse = reverse * 10 + digit;
//     n = (n/10) | 0;
// }

// if (original == reverse){
//     console.log(true)
// }else {
//     console.log(false)
// }


// let N = 121;
// let original = N;
// let reverse = 0;

// for (let i = 1; N > 0; i++) {
//     let digit = N % 10;
//     reverse = reverse * 10 + digit;
//     N = (N / 10) | 0;
// }

// if (original == reverse) {
//     console.log(true);
// } else {
//     console.log(false);
// }


var isPalindrome = function(x) {
    let original = x;
    let reverse = 0;
    
    while (x > 0) {
        let digit = x % 10;
        reverse = reverse * 10 + digit;
        x = Math.floor(x / 10);
    }
    
    return original === reverse;    
    
};
console.log(isPalindrome(121)); // Output: true

