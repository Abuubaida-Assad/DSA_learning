// let arr = [1,2,3,2,1]
// let left = 0;
// let right= arr.length -1;

// let palindrome = true;

// while (left< right){
//     if (arr[left] !== arr[right]){
//         palindrome = false;
//     break;
//     }
//     left ++;
//     right --;
// }

// console.log(palindrome);


// Union of Two Arrays;

// let a = [1, 2, 2, 3];
// let b = [3, 4, 5, 5];

// let union = new Set();


// for (let i=0; i<a.length; i++){
//     union.add(a[i]);
// }

// for (let j=0; j<b.length; j++){
//     union.add[b[j]]
// }

// console.log([...union]);

// comman of the array

// let a = [1, 2, 2, 3, 4];
// let b = [2, 4, 4, 6];

// let setA = new Set(a)
// let comman = new Set();

// for (let i=0; i<b.length; i++){
//     if (setA.has (b[i])){
//         comman.add(b[i]);
//     }
// }

// console.log(comman)


// let arr = [1,1,1,0,0,1,1,1,1,0,0,0,0,1,1]


//  let maxCount = 0;
// let count = 0;

// for (let i=0; i<arr.length; i++){
//     if (arr[i] === 1){
     
//     if (count > maxCount){
//     maxCount = count;
//        }
//     }
//     else {
        
//      count = 0;
//     }
// }
// console.log(maxCount)


//  selection sort

// let arr = [64,25,12,22,11];

// for (let i=0; i<arr.length; i++){
//     let minIndex = i;
//     for (let j=i+1; j<arr.length; j++){
//     if (arr[j] < arr[minIndex]){
//             minIndex = j;
//         }
//     }


//     [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
// }
// console.log(arr);

// bubble sort

// let arr = [64,25,12,22,11];

// for (let i=0; i<arr.length; i++){
//     for (let j=0; j<arr.length -1 -i; j++){
//         if (arr[j] > arr[j+1]){
//             [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
//         }
        
//     }
// }
// console.log(arr);    

let arr = [4,8,1,6,3,9,12,5,7];



let target = 14;
let map = new Map();

for (let i=0; i<arr.length; i++){
    let complement = target - arr[i];
    if (map.has(complement)){
        console.log(` (${arr[i]}, ${complement})`);
    }
    map.set(arr[i], i);
}


