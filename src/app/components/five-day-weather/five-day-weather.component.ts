import { Component, Input } from "@angular/core";
import { OpenWeatherList } from "../../interfaces/five-day-open-weather";

@Component({
  selector: 'five-day-weather-app',
  templateUrl: 'five-day-weather.component.html'
})
export class FiveDayWeatherComponent {
  @Input() fiveDayWeather: OpenWeatherList;
}