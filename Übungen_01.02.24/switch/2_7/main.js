function showtxt() {

    const selected = document.querySelector("#mylist").value;
    
    console.log(selected);

    switch(selected) {
        case "0":
            document.querySelector("#masse").innerHTML = "<b>Brief und Postkarte</b> <br> L: 10 - 23,5 cm B: 7 - 12,5 cmH: bis 1 cm";
        break;
        case "1":
            document.querySelector("#masse").innerHTML = "<b>DHL Paket 2 kg</b> <br>bis 60 x 30 x 15 cm";
        break;
        case "2":
            document.querySelector("#masse").innerHTML = "<b>DHL Paket 5 kg</b> <br>bis 120 x 60 x 60 cm";
        break;
        case "3":
            document.querySelector("#masse").innerHTML = "<b>DHL Paket 10 kg</b> <br>bis 120 x 60 x 60 cm";
        break;
        default:
            document.querySelector("#masse").innerHTML = "<b>Extra große Größe</b>";
    }
}