function evenPositions(input) {
    console.log(input.filter((elements, i) => {return i % 2 === 0}).join(' '))
}
evenPositions(['20', '30', '40']);