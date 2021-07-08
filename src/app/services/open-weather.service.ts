import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { OpenWeatherCustomIconUrl } from '../enums/open-weather-custom-icon-url.enum';

import { FiveDayOpenWeather, OpenWeatherList } from '../interfaces/five-day-open-weather';
import { OpenWeather } from '../interfaces/open-weather';

@Injectable()
export class OpenWeatherService {
  private readonly apiKey = '5a4b2d457ecbef9eb2a71e480b947604';

  constructor(private http: HttpClient) {}

  public getWeather(zipcode: string): Observable<OpenWeather> {
    const params = new HttpParams()
      .set('zip', `${zipcode},ch`)
      .set('appid', this.apiKey)
      .set('units', 'metric');

    return this.http
      .get<OpenWeather>('https://api.openweathermap.org/data/2.5/weather', {
        params: params
      })
      .pipe(
        map((openWeather: OpenWeather) => {
          openWeather.zipcode = zipcode;
          openWeather.weather[0].iconUrl =
            OpenWeatherCustomIconUrl[openWeather.weather[0].main];
          return openWeather;
        })
      );
  }

  public getFiveDayWeather(zipcode: string): Observable<FiveDayOpenWeather> {
    const params = new HttpParams()
      .set('zip', `${zipcode},ch`)
      .set('appid', this.apiKey)
      .set('units', 'metric');

    return this.http
      .get<FiveDayOpenWeather>('https://api.openweathermap.org/data/2.5/forecast/daily', {
        params: params
      }).pipe(map((weather: FiveDayOpenWeather) => {
        weather.zipcode = zipcode;
        weather.list.forEach((openWeatherList: OpenWeatherList) => {
          openWeatherList.date = new Date(openWeatherList.dt);
          openWeatherList.weather[0].iconUrl = OpenWeatherCustomIconUrl[openWeatherList.weather[0].main];
        });
        return weather;
      }))
  }
}
