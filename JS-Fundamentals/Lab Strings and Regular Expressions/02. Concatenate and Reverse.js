function concatAndReverse(arr){
    let text = arr.join('');
    let reversedText = text
        .split('')
        .reverse()
        .join('');
    console.log(reversedText);
}