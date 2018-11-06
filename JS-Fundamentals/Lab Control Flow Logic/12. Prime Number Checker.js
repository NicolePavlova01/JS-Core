function primeNumber(n) {
    let prime = true;
    for (let d = 2; d <= Math.sqrt(n); d++){
        if (n % d === 0){
            prime = false;
            break;
        }
    }
    return prime && (n > 1);
}