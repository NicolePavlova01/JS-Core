function matrixMaxNumber(input){
    let min = Number.NEGATIVE_INFINITY;
    for (let row = 0; row < input.length; row++) {
        for (let col = 0; col < input[row].length; col++) {

            if (input[row][col] > min){
                min = input[row][col];
            }
        }

    }
    console.log(min)
}
matrixMaxNumber([100,200], [1,1000]);