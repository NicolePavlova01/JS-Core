function cone(r, h) {

    let volume = (Math.PI * r * r * h) / 3;
    let area = Math.PI * r * (r + Math.sqrt((r*r)+(h*h)));

    console.log(volume);
    console.log(area);

}