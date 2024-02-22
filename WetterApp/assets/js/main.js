//* LISTE AN FUNKTIONEN *//
//? Hauptansicht mit Input Feld, zum eingeben einer Stadt.
//? Wetter Daten der eingegebenen Stadt auf Hauptseite anzeigen lassen.(Wetter Icon und alles andere)
//? Button zum wechseln auf die Wochenübersicht (Seitenwechsel)
//? Wochenübersicht mit dem Wetter der nächsten 5 Tage
//? Wochentage, Wetter Icon und Grad Anzahl anzeigen
//? Die Tage klickbar machen sodass man auf die Hauptseite gelangt und Daten des jeweiligen Tages bekommt.
//? Dynamische Willkommens Nachricht je nach Uhrzeit (Guten Morgen, Guten Mittag, Schönen Nachmittag, Guten Abend etc.)
//? Dynamischer Hintergrund je nach Wetter soll ein anderes Background Image angezeigt werden (Blur)
//? Bei Nacht (Ab 0 Uhr) soll ein passender Nacht Hintergrund angezeigt werden bis es wieder morgens ist.

const apiKey = "6f87af3fc269af96cc3cd46aff46307e";
const errorMessage = "Es ist ein Fehler aufgetreten, bitte versuche es erneut!";

const pageOne = document.querySelector(".page-one");
const pageTwo = document.querySelector(".page-two");
pageTwo.style.display = "none";

const country = "DE";

fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Wuppertal,${country}&appid=${apiKey}&units=metric&limit=1`)
.then((response) => response.json())
.then((weather) => getWeather(weather))
.catch((error) => alert(errorMessage))

const date = new Date();
let hours = date.getHours();

//* VARIABLEN
const sunrise = document.querySelector("#sunrise-info");
const sunset = document.querySelector("#sunset-info");
const mintemp = document.querySelector("#mintemp-info");
const maxtemp = document.querySelector("#maxtemp-info");
const humidity = document.querySelector("#humidity-info");
const rain = document.querySelector("#rain-info");
const weatherIcon = document.querySelector("#weather-icon");
const degrees = document.querySelector(".degrees");
const weatherDes = document.querySelector(".weather-type");
const dateTime = document.querySelector(".date");
const pageTwoWrap = document.querySelector(".page-two-wrap");
const root = document.querySelector(":root");


//* FUNCTION
getWeather = (weather) => {
   let cityName = document.querySelector(".title");
   cityName.innerHTML = `${weather.city.name}`
   const currentWeather = weather.list[0];
   let icon = currentWeather.weather[0].icon;
   let temp = currentWeather.main.temp.toFixed(1);
   let weatherType = currentWeather.weather[0].description;
   let weatherMain = currentWeather.weather[0].main;

   //* OUTPUT
   weatherIcon.src = `https://openweathermap.org/img/wn/${icon}@4x.png`;
   degrees.innerHTML = `${temp}°C`;
   weatherDes.innerHTML = `${weatherType}`;
   dateTime.innerHTML = `${date.toLocaleString('en-us', {weekday:'long'})} - ${date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}`;

   sunrise.innerHTML = new Date(weather.city.sunrise*1000).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
   sunset.innerHTML = new Date(weather.city.sunset*1000).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
   mintemp.innerHTML = currentWeather.main.temp_min + " °C";
   maxtemp.innerHTML = currentWeather.main.temp_max + " °C"
   humidity.innerHTML = currentWeather.main.humidity + " %";
   rain.innerHTML = (currentWeather.rain ? currentWeather.rain["3h"] : 0) + " LITERS";

   switch(weatherMain) {
      case "Thunderstorm": 
         pageOne.style.backgroundImage = "url(assets/img/thunder.png)"
         break
      case "Drizzle":
      case "Rain":
         pageOne.style.backgroundImage = "url(assets/img/rainy.png)"
         break
      case "Clouds":
         pageOne.style.backgroundImage = "url(assets/img/cloudy.png)"
         break
      default:
         pageOne.style.backgroundImage = "url(assets/img/sunny.png)"
         break
   }

   if(hours >= 6 && hours < 11) {
      let dayTime = document.querySelector(".slogan");
      dayTime.innerHTML = "Guten Morgen"; 
   } else if(hours >= 11 && hours < 13) {
      let dayTime = document.querySelector(".slogan");
      dayTime.innerHTML = "Guten Mittag";
   } else if(hours >= 13 && hours < 17) {
      let dayTime = document.querySelector(".slogan");
      dayTime.innerHTML = "Schönen Nachmittag";
   } else if(hours >= 17 && hours < 23) {
      let dayTime = document.querySelector(".slogan");
      dayTime.innerHTML = "Guten Abend";
   } else if(hours >= 0 && hours < 6) {
      let dayTime = document.querySelector(".slogan");
      dayTime.innerHTML = "Gute Nacht";
      pageOne.style.backgroundImage = "url(assets/img/night.png)"
      root.style.setProperty("--bg", "rgba(255, 255, 255, 0.3)");
   }

   generateDetails();
};

searchWeather = (event) => {
   event.preventDefault();
   let inputValue = document.querySelector("#searchbar").value;
   fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${inputValue},${country}&appid=${apiKey}&units=metric&limit=1`)
   .then((response) => response.json())
   .then((weather) => getWeather(weather))
   .catch((error) =>  {
      alert(errorMessage)
      console.error(error);
   })
};

const showNextDays = () => {
    pageOne.style.display = "none";
    pageTwo.style.display = "block";
};

const showStart = () => {
    pageOne.style.display = "block";
    pageTwo.style.display = "none";
};

//*________________________________________________________________________________________________________________________________

let weatherDays = [1,2,3,4,5];

const generateDetails = () => {
      weatherDays.forEach((weatherBoxes) => {
         pageTwoWrap.innerHTML += 
         `<div class="weather-info-box">
         <div class="day"> <h2>MO</h2> </div>
         <div class="icon">
           <img
             class="icon-img"
             src="./assets/img/day_rain.png"
             alt="IMAGE"
           />
         </div>
         <div class="temperature"> <h2>${weatherBoxes}</h2>
         </div>
       </div>`
      });    
};


