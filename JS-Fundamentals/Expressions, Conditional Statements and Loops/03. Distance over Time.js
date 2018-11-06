function distanceOverTime(input){

    let S1 = (input[0]*1000) * input[2];
    let S2 = (input[1]*1000) * input[2];
    let result = Math.abs(S1 - S2) / 3600;
    console.log(result);
}