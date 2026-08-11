let arr = [22,36,4,98,12,54]
let max =[0]
for (let i=1; i<arr.length; i++){
    if (arr[i] > max) {
        max = arr[i];
}
}

console.log(max)
