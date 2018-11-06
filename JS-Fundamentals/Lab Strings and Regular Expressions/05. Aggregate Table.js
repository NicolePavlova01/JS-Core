function aggregateTable(lines){
    let sum = 0;
    let output = [];
    for (let line of lines){
        let town = line.split('|');
        output.push(town[1].trim());
        sum += Number(town[2].trim());
    }
    console.log(output.join(', '));
    console.log(sum);
}
aggregateTable('| Sofia           | 300',
'| Veliko Tarnovo  | 500',
'| Yambol          | 275')