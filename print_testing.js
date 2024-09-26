const cairoEgypt = {
    "location": {
      "name": "Cairo",
      "region": "Al Qahirah",
      "country": "Egypt",
      "lat": 30.05,
      "lon": 31.25,
      "tz_id": "Africa/Cairo",
      "localtime_epoch": 1727359513,
      "localtime": "2024-09-26 17:05"
    },
    "current": {
      "last_updated_epoch": 1727359200,
      "last_updated": "2024-09-26 17:00",
      "temp_c": 32.2,
      "temp_f": 90.0,
      "is_day": 1,
      "condition": {
        "text": "Partly cloudy",
        "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
        "code": 1003
      },
      "wind_mph": 14.1,
      "wind_kph": 22.7,
      "wind_degree": 38,
      "wind_dir": "NE",
      "pressure_mb": 1010.0,
      "pressure_in": 29.83,
      "precip_mm": 0.0,
      "precip_in": 0.0,
      "humidity": 38,
      "cloud": 25,
      "feelslike_c": 30.6,
      "feelslike_f": 87.2,
      "windchill_c": 34.3,
      "windchill_f": 93.7,
      "heatindex_c": 33.2,
      "heatindex_f": 91.7,
      "dewpoint_c": 11.3,
      "dewpoint_f": 52.3,
      "vis_km": 10.0,
      "vis_miles": 6.0,
      "uv": 8.0,
      "gust_mph": 17.4,
      "gust_kph": 28.0
    }
  }

console.log(cairoEgypt.location.localtime)

const meats = ['chicken, ', '', 'brisket']

let meatString = meats.join('')
console.log(meatString)
