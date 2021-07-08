import { Component, EventEmitter, Input, Output } from "@angular/core";
import { OpenWeather } from "../../interfaces/open-weather";

@Component({
  selector: 'detail-weather-app',
  templateUrl: './detail-weather.component.html'
})
export class DetailWeatherComponent {
  @Input() detailWeather!:OpenWeather;
  @Output() closeDetailWeather: EventEmitter<OpenWeather>;

  constructor() {
    this.closeDetailWeather = new EventEmitter()
  }

  public onCloseClick() {
    console.log('click');
    this.closeDetailWeather.emit(this.detailWeather);
  }
}