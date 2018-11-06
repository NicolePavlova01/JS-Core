function attack(arr){
    let matrix = [];
    for(let i = 0; i< arr.length; i++){
        matrix.push(arr[i].split(' ').map(Number));
    }
    let primaryDiagonal = 0;
    let secondaryDiagonal = 0;

    for(let row = 0; row < matrix.length; row++){
        for(let col = 0; col< matrix.length; col++){
            if (row === col){
                primaryDiagonal += matrix[row][col];
            }
            if (col === matric[row].length - row - 1){

            }
        }
    }
}