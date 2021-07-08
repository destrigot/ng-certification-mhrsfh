import { OpenWeatherCustomIconUrl } from "../enums/open-weather-custom-icon-url.enum";

export interface OpenWeatherList {
  dt: number,
  sunrise: number,
  sunset: number,
  temp:{
     day: number,
     min: number,
     max: number,
     night: number,
     eve: number,
     morn: number
  },
  feels_like:{
     day: number,
     night: number,
     eve: number,
     morn: number
  },
  pressure: number,
  humidity: number,
  weather:[
     {
        id: number,
        main: string,
        description: string,
        icon: string
        iconUrl: OpenWeatherCustomIconUrl
     }
  ],
  speed: number,
  deg: number,
  gust:  number,
  clouds: number,
  pop: number
}

export interface FiveDayOpenWeather {
  city:{
     id: number,
     name: string,
     coord:{
        lon: number,
        lat: number
     },
     country: string,
     population: number,
     timezone: number
  },
  cod: string,
  message: number,
  cnt: number,
  list: OpenWeatherList[],
  zipcode: string
}

