function factorialize(num) {
    if (num === 0) {
        return 1;
    }

    let result = 1;
    for (let i = 1; i <= num; i++) {
        result = result * i;
    }

    return result;
}

console.log(factorialize(5));
console.log(factorialize(6));
