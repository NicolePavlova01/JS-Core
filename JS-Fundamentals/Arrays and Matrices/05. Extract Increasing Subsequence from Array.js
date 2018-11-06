function extractNonDescSequence(arr) {
    arr = arr.map(Number);
    let seq = [arr[0]];
    for (let i = 1; i < arr.length; i++)
        if(arr[i] >= seq[seq.length - 1])
            seq.push(arr[i]);
    console.log(seq.join('\n'));
}