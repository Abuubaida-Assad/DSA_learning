//  selection sort

let arr = [64,25,12,22,11];

for (let i=0; i<arr.length; i++){
    let minIndex = i;
    for (let j=i+1; j<arr.length; j++){
    if (arr[j] < arr[minIndex]){
            minIndex = j;
        }
    }


    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
}
console.log(arr);

// bubble sort

let arr = [64,25,12,22,11];

for (let i=0; i<arr.length; i++){
    for (let j=0; j<arr.length -1 -i; j++){
        if (arr[j] > arr[j+1]){
            [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
        }
        
    }
}
console.log(arr); 

