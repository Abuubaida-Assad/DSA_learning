// function goLunch(person){
//     if (person === 5) return true;
//     console.log(person);
//     return goLunch(person + 1)
// }
// console.log(goLunch(1))


// function factorial (n){
//     if(n==0){
//         return 1;
//     }else return n * factorial(n-1);
// }

// console.log(factorial(5))

// function rangeOfnums(startNum,endNum){
//     if (endNum < startNum){
//         return []
//     }else {
//         const numms =  rangeOfnums (startNum , endNum -1)
//         numms.push(endNum);
//         return numms;
//     }
// }
// console.log(rangeOfnums(0,5))



function fib(n){
    if (n<=1) return n;
    return fib(n-1) +fib(n-2)
}

console.log(fib(9))