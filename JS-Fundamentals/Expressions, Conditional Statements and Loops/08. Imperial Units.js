function imperialUnits(n){
    let feet = Math.floor(n / 12);
    let inches = Math.abs(n - (12 * feet));
    let result = `${feet}'-${inches}"`
    console.log(result);

}