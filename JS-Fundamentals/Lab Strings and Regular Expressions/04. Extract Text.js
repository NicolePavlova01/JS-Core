function extractText(input) {
    let result = [];
    let startIndex = input.indexOf('(');
    let endIndex = input.indexOf(')', startIndex);
    while(startIndex > -1 && endIndex > -1){
        let snippet = input.substring(startIndex + 1, endIndex);
        result.push(snippet);
        startIndex = input.indexOf('(', endIndex);
        endIndex = input.indexOf(')', startIndex);

    }
    console.log(result.join(', '))
}
extractText('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)')
