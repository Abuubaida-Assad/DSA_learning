let arr = [1,0,2,0,4,3]
let count = 0;

for (let i=0; i<arr.length; i++){
    if (arr[i] !== 0){
        arr[count++] = arr[i]
    }
}

while (count < arr.length){
    arr[count++] = 0; 
    
}
console.log(arr);









// let N = 9875;


// let sum = 0;

// for(let i= 1; i<10; i++){
//     let digit = N % 10;
//     sum = sum + digit;
//     N= N/10|0
// }

// console.log(sum)




