let arr = [2,12,7,10]
let incresing = true;
for (let i=1; i<= arr.length; i++){
    if(arr[i] <= arr[i-1])
        incresing = false;
    break;
}
console.log(incresing);

class Solution {
    isSorted(arr) {
        // code here
        let incresing = true;   

        for (let i=1; i<= arr.length; i++){
            if(arr[i] <= arr[i-1]){
                incresing = false;
                break;
            }
        }
        return incresing;
        
    }
}

// Check if Array Is Sorted and Rotated
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > nums[(i + 1) % nums.length]) {
            count++;
        }
    }
    return count <= 1;
    
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
};

// 

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k % nums.length;
    
  
    
};