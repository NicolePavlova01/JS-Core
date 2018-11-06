function printTriangle(n){
    for (let i = 1; i <= n; i++) {
        console.log("*".repeat(i).trim())
    }
    for (let j = n - 1 ; j > 0; j--) {
        console.log("*".repeat(j).trim())
    }
}