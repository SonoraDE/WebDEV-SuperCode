function changeBackground() {
    const red = document.querySelector("#red").value;
    const green = document.querySelector("#green").value;
    const blue = document.querySelector("#blue").value;

    console.log(red, green, blue);

    //const farbe = "rgb("+ red + "," + green + "," + blue + ")";
    //! MERKEN: VIEL EINFACHER 
    const farbe = `rgb(${red}, ${green}, ${blue})`
    console.log(farbe);

    //rbg(0, 0, 0);
    document.querySelector("body").style.backgroundColor = farbe;
    document.querySelector("body").style.color = "#FFFFFF";
}

changeBackground();
