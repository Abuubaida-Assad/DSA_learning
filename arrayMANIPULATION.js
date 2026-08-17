// Right Rotate by One

// let arr = [1,2,3,4,5]
// let last = arr[arr.length - 1];
// for (let i= arr.length-1; i>0; i--){
//     arr[i]=arr[i-1]
   
// }

//  arr[0] = last;

// console.log(arr);

// rotate left by k

// let arr = [1,2,3,4,5];
// let k=2;
// let result = [];

// k= k % arr.length;

// for (let i=k; i<arr.length; i++){
//     result.push(arr[i]);

// }
// for (let j=0; j<k; j++)
// {
//     result.push(arr[j]);
// }

// console.log(result);


// let arr =[1,2,3,4,5];
// let k=2;
// let result =[];
// k=k % arr.length;

// for(let i=arr.length -k; i<arr.length; i++){
//     result.push(arr[i]);
// }

// for(let j=0; j<arr.length -k; j++){
//     result.push(arr[j]);
// }


// console.log(result);


// let arr = [1,2,3,4,5]
// let left = 0;
// let right = arr.length - 1;

// while (left < right){
//    let temp = arr[left];
//     arr[left]=arr[right];
//     arr[right] = temp;
//     left ++;
//     right--;

// }

// console.log(arr);\

// moves zeros to end

// let arr= [0,1,0,3,12];
// let write  = 0;

// for (let i=0; i<arr.length; i++){
//     if (arr[i] ==! 0){
//         arr[write]=arr[i];
//         write ++;
//     }
// }

// while (write < arr.length){
//     arr[write] = 0;
//     write ++;

// }

// console.log(arr)

// Move Negative Numbers to Beginning

let arr = [3, -2, 5, -7, 4, -1];

let write = 0;



