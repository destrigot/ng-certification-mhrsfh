import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { Observable } from "rxjs";
import { OpenWeatherService } from "../../services/open-weather.service";

@Injectable()
export class FiveDayWeatherResolver implements Resolve<any> {
  constructor(
    private openWeatherService: OpenWeatherService
  ) {}

  public resolve (activatedRoute: ActivatedRouteSnapshot): Observable<any> {
    const zipcode: string = activatedRoute.paramMap.get('zipcode');

    return this.openWeatherService.getFiveDayWeather(zipcode);
  }
}