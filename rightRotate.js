let arr = [1,2,3,4,5];
let last = arr[arr.length-1];
for (let i = arr.length-1; n>0; i--){
    arr[i]=[i-1];

}
arr[0]=last;

console.log(arr)