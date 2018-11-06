function calc(a, b, symbol) {
    let sum = function(a,b) {return a+b};
    let subtract = function(a,b) {return a-b}
    let multiply = function(a,b) {return a*b};
    let divide = function(a,b) {return a/b};
    switch (symbol){
        case '*': return multiply(a,b);
        case '/': return divide(a,b);
        case '+': return sum(a,b);
        case '-': return subtract(a,b);
    }
}