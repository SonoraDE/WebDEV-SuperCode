function imageArray() {
    var returnArray = [];

    for (var i = 0; i <= 100; i++) {
        var fileName = "image_" + (i < 10 ? "00" : i < 100 ? "0" : "") + i + ".jpg";
        returnArray.push(fileName);
    }

    console.table(returnArray);
}

imageArray();