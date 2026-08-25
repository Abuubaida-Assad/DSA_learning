// let arr = [1,0,2,0,4,3]
// let count = 0;

// for (let i=0; i<arr.length; i++){
//     if (arr[i] !== 0){
//         arr[count++] = arr[i]
//     }
// }

// while (count < arr.length){
//     arr[count++] = 0; 
    
// }
// console.log(arr);










// let N = 9875;


// let sum = 0;
// let lastSum = 0;

// for (let i= 1; i<10; i++){
//     let digit = N % 10;
//     sum = sum + digit;
//     N= N/10|0
// }

// console.log(sum)




// let n = 9875;
// let sum = 0;

// while (n > 0) {
//     let digit = n % 10;
//     sum = sum + digit;

//     n = (n - digit) / 10;



//     if (n === 0 && sum >= 10) {


//         n = sum;
//         sum = 0;
//     }
// }

// console.log(sum);

// let arr = [4, 5, 1, 2, 1, 4, 5, 7];

// let map = new Map();

// for (let num of arr) {
//     map.set(num, (map.get(num) || 0) + 1);
// }

// for (let num of arr) {
//     if (map.get(num) === 1) {
//         console.log(num);
//         break;
//     }
// }




// let arr = [1,0,2,0,4,3]
// let count = 0;

// for (let i=0; i<arr.length; i++){
//     if (arr[i] !== 0){
//         arr[count++] = arr[i]
//     }
// }

// while (count < arr.length){
//     arr[count++] = 0; 
    
// }
// console.log(arr);

// let arr = [1, 3, 5, 2, 2];

// let prefix = 0;
// let suffix = 0;


// for (let i = 0; i < arr.length; i++) {
//     suffix += arr[i];
// }

// for (let i = 0; i < arr.length; i++) {

//     suffix -= arr[i];

//     if (prefix === suffix) {
//         console.log(i);
//         break;
//     }

//     prefix += arr[i];
// }





//

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let n = matrix.length;


for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
        let temp = matrix[i][j];
        matrix[i][j] = matrix[j][i];
        
        matrix[j][i] = temp;

    }
}

for (let i = 0; i < n; i++) {
    matrix[i].reverse();
}

console.log(matrix);







