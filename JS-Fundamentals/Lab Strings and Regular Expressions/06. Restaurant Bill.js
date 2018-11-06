function printBill(input){
    let products = input.filter((x,i) => i%2==0);
    let sum = input.filter((x,i) => i%2==1)
        .map(Number)
        .reduce((a, b) => a + b);
    console.log(`You purchased ${products.join(', ')} for a total sum of ${sum}`)

}
printBill(['cola','1.35','pancakes','2.88'])