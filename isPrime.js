function isPrime(n){
    if(n<0){
        return false;

    }
    for(let d =2; d*d <=n; d++){
        if(n % d === 0){
            return false
        }
    } return true;
};

let arr = [2,4,5,8,9,11,12];
let count = 0;
for (let i=0; i<arr.length;i++){
    if(isPrime(arr[i])){
        count ++;
    }
}

console.log(count)