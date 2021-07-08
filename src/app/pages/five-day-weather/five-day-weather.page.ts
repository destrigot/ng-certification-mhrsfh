import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { FiveDayOpenWeather, OpenWeatherList } from "../../interfaces/five-day-open-weather";

@Component({
  templateUrl: './five-day-weather.page.html'
})
export class FiveDayWeatherPage{
  public readonly fiveDayWeather: OpenWeatherList[];
  public readonly cityName: string;

  constructor(
    private activatedRoute: ActivatedRoute,
  ) {
    this.fiveDayWeather = (<FiveDayOpenWeather>this.activatedRoute.snapshot.data.weather).list.slice(0, 5);
    this.cityName = (<FiveDayOpenWeather>this.activatedRoute.snapshot.data.weather).city.name;
  }
}