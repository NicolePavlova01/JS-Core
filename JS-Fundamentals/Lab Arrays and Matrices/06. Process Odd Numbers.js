function processOddNumbers(input){
    let result = input.filter((e, x) => x % 2 !== 0)
        .map(e => e*2)
        .reverse();
    console.log(result);
}
processOddNumbers([1,2,3,4,5,6])