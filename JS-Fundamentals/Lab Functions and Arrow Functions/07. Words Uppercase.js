function uppercase(input) {
    console.log(input.toUpperCase().split(/\W+/).filter(function(a) {
        return a !== ''
    }).join(', '));
}
