// /**
//  * @param {string[]} strs
//  * @return {string}
//  */
// var longestCommonPrefix = function(strs) {
//     let prifix = strs[0];
//     for(let i=1; i<strs.length; i++){
//         while(strs[i].indexOf(prifix) !==0){
//             prifix = prifix.substring(0,prifix.length-1)
//         }
//     }
//     return prifix;
// };

// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {boolean}
//  */
// var isAnagram = function(s, t) {
//     if (s.length !== t.length) {
//         return false;
//     }

//     let map = new Map();

//     // Count characters in s
//     for (let x of s) {
//         map.set(x, (map.get(x) || 0) + 1);
//     }

//     // Remove characters using t
//     for (let x of t) {
//         if (!map.has(x)) {
//             return false;
//         }

//         map.set(x, map.get(x) - 1);

//         if (map.get(x) < 0) {
//             return false;
//         }
//     }

//     return true;
// };




// class Solution {
//     lowerBound(arr, target) {
//         // code here
//         let low = 0;
//         let high = arr.length-1;
//         let ans = arr.length;
//         while(low <= high){
//             let mid = Math.floor((low+high)/2);
//             if(arr[mid]>=target){
//                 ans = mid;
//                 high = mid-1;
//             }else{
//                 low = mid +1;
//             }
//         }
//         return ans;
//     }
// }

// class UpperBoundFinder {
//     // Binary search to find upper bound
//     upperBound(arr, x) {
//         let low = 0, high = arr.length - 1;
//         let ans = arr.length; // Default to array length if no upper bound found

//         while (low <= high) {
//             const mid = Math.floor((low + high) / 2);

//             if (arr[mid] > x) {
//                 ans = mid;       // Store current index
//                 high = mid - 1;  // Move left
//             } else {
//                 low = mid + 1;   // Move right
//             }
//         }
//     }
// }




function onetoN(n) {
    if (n < 1) {
        return ;
    }
    onetoN(n - 1);
    console.log(n);
}
console.log(onetoN(5));


function Ntoone(n) {
    if (n < 1) {
        return ;
    }
    onetoN(n + 1);
    console.log(n);
}
console.log(onetoN(5));

function printNToOne(n) {
  // Base Case: Stop when n goes below 1
  if (n < 1) {
    return;
  }

  // Action: Print the current number immediately
  console.log(n);

  // Recursive Case: Call the function with the next smaller number
  printNToOne(n - 1);
}

printNToOne(5);
