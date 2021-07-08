import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, zip } from 'rxjs';

import { OpenWeather } from '../../interfaces/open-weather';
import { OpenWeatherService } from '../../services/open-weather.service';
import { ZipcodeService } from '../../services/zipcode.service';

@Component({
  templateUrl: './detail-weather.page.html'
})
export class DetailWeatherPage implements OnInit{
  public detailWeathers$ = new BehaviorSubject<Array<OpenWeather>>([]);

  constructor(
    private zipcodeService: ZipcodeService,
    private openWeatherService: OpenWeatherService
  ) {}

  public ngOnInit() {
    const openWeatherSubscriptions: Array<Observable<OpenWeather>> = [];
    this.zipcodeService.zipcodes.forEach((zipcode: string) => {
      openWeatherSubscriptions.push(
        this.openWeatherService.getWeather(zipcode)
      );
    });

    zip(...openWeatherSubscriptions).subscribe(
      (detailWeathers: Array<OpenWeather>) => {
        this.detailWeathers$.next([
          ...this.detailWeathers$.value,
          ...detailWeathers
        ]);
      }
    );
  }

  public onNewZipcode(zipcode: string): void {
    if (this.zipcodeService.isInLocalStorage(zipcode)) {
      return;
    }

    this.openWeatherService
      .getWeather(zipcode)
      .subscribe((detailWeather: OpenWeather) => {
        this.zipcodeService.addZipcode(zipcode);
        this.detailWeathers$.next([
          ...this.detailWeathers$.value,
          detailWeather
        ]);
      });
  }

  public onCloseDetailWeather(detailWeather: OpenWeather) {
    const detailWeatherArrayPosition = this.detailWeathers$.value.indexOf(
      detailWeather
    );
    const zipcodeArrayPosition = this.zipcodeService.zipcodes.indexOf(
      detailWeather.zipcode
    );

    if (detailWeatherArrayPosition !== -1) {
      const currentDetailsWeatherValue = this.detailWeathers$.value;
      currentDetailsWeatherValue.splice(detailWeatherArrayPosition, 1);
      this.detailWeathers$.next(currentDetailsWeatherValue);
    }

    if (zipcodeArrayPosition !== -1) {
      const currentZipcodesValue = this.zipcodeService.zipcodes;
      currentZipcodesValue.splice(zipcodeArrayPosition, 1);
      this.zipcodeService.zipcodes = currentZipcodesValue;
    }
  }

  public trackByIndex(index: number): number {
    return index;
  }
}
