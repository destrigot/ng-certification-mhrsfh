import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { OpenWeatherCustomIconUrl } from '../enums/open-weather-custom-icon-url.enum';
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

  public getFiveDayWeather(zipcode: string): Observable<any> {
    const params = new HttpParams()
      .set('zip', `${zipcode},ch`)
      .set('appid', this.apiKey)
      .set('units', 'metric');

    return this.http
      .get<any>('https://api.openweathermap.org/data/2.5/forecast/daily', {
        params: params
      })
  }
}
