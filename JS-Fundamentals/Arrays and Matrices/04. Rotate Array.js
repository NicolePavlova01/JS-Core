function rotate(input) {
    let n = Number(input.pop());
    for (let i = 0; i < n % input.length; i++) {
        input.unshift(input.pop())
    }

    console.log(input.join(' '))
}
rotate(['banana','orange','coconut','apple',15])