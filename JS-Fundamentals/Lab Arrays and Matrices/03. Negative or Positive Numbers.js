function negativeToPositive(input){
    let result = [];
    for (let i = 0; i < input.length; i++) {
         let n = Number(input[i])
        if (n >= 0 ){
             result.push(n);
        } else{
             result.unshift(n);
        }

    }
    console.log(result.join('\n'))
}