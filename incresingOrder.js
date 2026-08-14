let arr = [2,12,7,10]
let incresing = true;
for (let i=1; i<= arr.length; i++){
    if(arr[i] <= arr[i-1])
        incresing = false;
    break;
}
console.log(incresing);