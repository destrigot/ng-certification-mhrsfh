import { Routes } from '@angular/router';
import { DetailWeatherPage } from './pages/detail-weather/detail-weather.page';
import { FiveDayWeatherPage } from './pages/five-day-weather/five-day-weather.page';
import { FiveDayWeatherResolver } from './pages/five-day-weather/five-day-weather.resolver';

export const appRoutes: Routes = [
  {
    path: '',
    component: DetailWeatherPage
  },
  {
    path: 'forecast/:zipcode',
    component: FiveDayWeatherPage,
    resolve: {weather: FiveDayWeatherResolver}
  },
  {
    path: '**',
    component: DetailWeatherPage
  },
];
