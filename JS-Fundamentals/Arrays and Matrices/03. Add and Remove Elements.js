function addAndRemove(input) {
    let result = [];
    let counter = 1;
    let commands = {
        add: (num) => result.push(num),
        remove: (num) => result.pop()
    }
    for (let i = 0; i < input.length; i++){
        let cmd = input[i];
        commands[cmd](counter);
        counter++;

    }
    if (result.length === 0){
        console.log("Empty")
    }
console.log(result.join('\n'))
}