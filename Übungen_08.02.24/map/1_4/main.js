function fahrenheitToCelsius(fahrenheitTemperatures) {
  // Verwende map(), um jedes Element im Array umzurechnen
  const celsiusTemperatures = fahrenheitTemperatures.map(fahrenheit => (fahrenheit - 32) / 1.8);
  
  return celsiusTemperatures;
}

// Array mit Fahrenheit-Temperaturen
const fahrenheitTemperatures = [
  0, 32, 45, 50, 75, 80, 99, 120
];

// Umrechnung von Fahrenheit in Celsius
const celsiusTemperatures = fahrenheitToCelsius(fahrenheitTemperatures);

// Ausgabe der umgerechneten Celsius-Temperaturen in der Konsole
console.table(celsiusTemperatures);