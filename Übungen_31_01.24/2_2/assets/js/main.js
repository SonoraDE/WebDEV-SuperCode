function checkAirQuality() {
    let air = document.querySelector("#airvalue").value;
    document.querySelector("#airquality").innerHTML = "Luftqualität:" + air; 
    
    if(air <= 50){
        document.querySelector("#level-one").innerHTML = "Good Level of health";
        document.querySelector("#level-two").innerHTML = "Little or no risk";
        document.querySelector("body").style.backgroundColor = "green";
    } else if (air > 50 && air <= 100) {
        document.querySelector("#level-one").innerHTML = "Moderate Level of health";
        document.querySelector("#level-two").innerHTML = "Generable publics not likely affected";
        document.querySelector("body").style.backgroundColor = "yellow";
    } else if (air > 100 && air <= 150) {
        document.querySelector("#level-one").innerHTML = "Unhealthy for sensitive groups Level of health";
        document.querySelector("#level-two").innerHTML = "Generable publics not likely affected";
        document.querySelector("body").style.backgroundColor = "red";
    }
}

checkAirQuality();