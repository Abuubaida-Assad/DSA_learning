let n = 4531;
let count = 0;

while (n > 0) {
    n = (n - n % 10) / 10;
    count++;
}

console.log(count);