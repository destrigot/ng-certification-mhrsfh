import { Routes } from '@angular/router';
import { DetailWeatherPage } from './pages/detail-weather/detail-weather.page';
import { FiveDayWeatherPage } from './pages/five-day-weather/five-day-weather.page';

export const appRoutes: Routes = [
  {
    path: '',
    component: DetailWeatherPage
  },
  {
    path: 'forecast/:id',
    component: FiveDayWeatherPage
  }
];
