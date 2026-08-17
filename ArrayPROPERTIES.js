// Second Largest Distinct Element

// let arr = [12, 35, 1, 10, 34, 1];

// let largest = -"Infinity";
// let SecondLargest = -"Infinity";

// for (let i=0; i<arr.length; i++){
//     if (arr[i]>largest){
//         SecondLargest=largest;
//         largest = arr[i];

//     }else(arr[i]>SecondLargest && arr[i] !== largest);
//     SecondLargest = arr[i];
// }

// console.log(SecondLargest);


// Smallest and Largest in One Traversal

// let arr = [7, 2, 9, 4, 1, 8];

// let smallest = arr[0];
// let largest = arr[0];

// for(let i=0; i<arr.length; i++){
//     if (arr[i]<smallest){
//         smallest = arr[i];
//     }
//     if(arr[i]>largest){
//         largest=arr[i];
//     }
// }
// console.log(smallest,largest);

//First and Last Occurrence


let arr = [5, 2, 7, 2, 9, 2];

X=2;

let first = -1;
let last = -1;

for (let i = 0; i < arr.length; i++) {
if (arr[i] === X) {
if (first === -1) {
first = i;
}
last = i;
}
}
console.log(first, last);