const bands = ['Kiss', 'Aerosmith', 'ACDC', 'Led Zeppelin', 'Nickelback'];

bands.forEach(function(band){
    if(band === "Nickelback") {
        console.log("I DON'T love " + band + "!");
    } else {
            console.log("I love " + band + "!");
    }
});