function sortArray(input) {

    let result =  input.sort((a,b) => a.localeCompare(b)).sort((a,b) => a.length - b.length);
    console.log(result.join('\n'));
}