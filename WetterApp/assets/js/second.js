const testFunction = (changeContent) => {
    let sampleWeatherData;
    if(changeContent === 1) {
        sampleWeatherData = {
            "city": {
                "name": "Berlin",
                "sunrise": 1645370242,
                "sunset": 1645413838
            },
            "list": [
                {
                    "dt_txt": "2024-02-23 20:22:47",
                    "weather": [
                        {
                        "icon": "02d",
                        "description": "few clouds",
                        "main": "Clear"
                        }
                    ],
                    "main": {
                        "temp": 16,
                        "temp_min": 15,
                        "temp_max": 20,
                        "humidity": 40
                    },
                    "rain": {
                        "3h": 0.3
                    }
                }
            ]
        };
    } else if(changeContent === 2) {
        sampleWeatherData = {
            "city": {
                "name": "Frankfurt",
                "sunrise": 1645370242,
                "sunset": 1645413838
            },
            "list": [
                {
                    "dt_txt": "2024-02-23 20:22:47",
                    "weather": [
                        {
                        "icon": "11d",
                        "description": "Thunderstorm",
                        "main": "Thunderstorm"
                        }
                    ],
                    "main": {
                        "temp": 8,
                        "temp_min": 8,
                        "temp_max": 14,
                        "humidity": 90
                    },
                    "rain": {
                        "3h": 10.0
                    }
                }
            ]
        };
    } else if(changeContent === 3) {
        sampleWeatherData = {
            "city": {
                "name": "Hamburg",
                "sunrise": 1645370242,
                "sunset": 1645413838
            },
            "list": [
                {
                    "dt_txt": "2024-02-23 20:22:47",
                    "weather": [
                        {
                        "icon": "10n",
                        "description": "extreme rain",
                        "main": "Rain"
                        }
                    ],
                    "main": {
                        "temp": 10,
                        "temp_min": 8,
                        "temp_max": 16,
                        "humidity": 80
                    },
                    "rain": {
                        "3h": 30.1
                    }
                }
            ]
        };
        hours = 1;
    }
    getWeather(sampleWeatherData);
};