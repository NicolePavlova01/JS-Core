function lastKNumbersSequence(n, k){
    let seq = [1];
    for (let i = 1; i < n; i++) {
        seq[i] = seq.
            slice(Math.max(0,seq.length - k), i + k)
            .reduce((a,b) => {return a + b}, 0)

    }
    console.log(seq)
}
lastKNumbersSequence(8,2)