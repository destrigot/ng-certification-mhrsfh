import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { OpenWeatherService } from "../../services/open-weather.service";

@Component({
  templateUrl: './five-day-weather.page.html'
})
export class FiveDayWeatherPage implements OnInit{
  constructor(
    private activatedRoute: ActivatedRoute,
    private openWeather: OpenWeatherService
  ) {
    
  }

  public ngOnInit() {
    this.activatedRoute.paramMap
    .pipe()
    .subscribe((paramMap: ParamMap) => {
      paramMap.get('zipcode');
    })
  }
}