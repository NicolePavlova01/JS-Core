function aggregateElements(elements) {
    aggregate(0, (a,b) => a + b);
    aggregate(0, (a,b) => a + 1/b);
    aggregate('', (a,b) => a + b);

    function aggregate(initVal, arrow) {
        for (let i = 0; i < elements.length;i++){
            initVal = arrow(initVal, elements[i]);

        }
        console.log(initVal)
    }


}