function prime (max) {
    let prime = 1;
    let num = 2;
    let odd;
    while (prime < max) {
        num++;
        odd = 3;
        while (num % 2 === 0) break;

        while (odd < num) {
            if (num % odd === 0) break;
            odd += 2;
        }
        
        if (num === odd) {
            prime++;
        }
    }
    return num;
}
console.log(prime(10001))