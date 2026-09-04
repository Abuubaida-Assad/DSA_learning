function goLunch(person){
    if (person === 5) return true;
    console.log(person);
    return goLunch(person + 1)
}
console.log(goLunch(1))