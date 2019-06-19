const bands = ['Kiss', 'Aerosmith', 'ACDC', 'Led Zeppelin', 'Nickelback'];

// Makes sure you DON'T love Nickelback
bands.forEach(function(band){
    if(band === "Nickelback") {
        alert("I DON'T love " + band + "!");
    } else {
            alert("I love " + band + "!");
    }
});