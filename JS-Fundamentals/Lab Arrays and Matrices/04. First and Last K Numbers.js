function firstAnfLastK(input) {
    let k = Number(input.shift());
    console.log(input.slice(0, k));
    console.log(input.slice(input.length - k))

}
firstAnfLastK([1, -2, 3, -4, 5])