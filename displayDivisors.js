array = []
for (let i= 1; i * i<= num; i++) {
    if (num % i === 0) {
        array.push(i)
        array.push(num / i)
        return array
    }
}   

console.log(array)