import { Routes } from "@angular/router";
import { DetailWeatherPage } from "./pages/detail-weather/detail-weather.page";

export const appRoutes: Routes = [
  {
    path: '',
    component: DetailWeatherPage,
    children: [{
      path: 'forecast/:id',
      component: DetailWeatherPage
    }]
  }
]