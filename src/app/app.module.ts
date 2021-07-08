import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { appRoutes } from './app.rounting';

import { EnterZipcodeComponent } from './components/enter-zipcode/enter-zipcode.component';
import { DetailWeatherComponent } from './components/detail-weather/detail-weather.component';
import { FiveDayWeatherComponent } from './components/five-day-weather/five-day-weather.component';

import { ZipcodeService } from './services/zipcode.service';
import { OpenWeatherService } from './services/open-weather.service';
import { FiveDayWeatherResolver } from './pages/five-day-weather/five-day-weather.resolver';

import { DetailWeatherPage } from './pages/detail-weather/detail-weather.page';
import { FiveDayWeatherPage } from './pages/five-day-weather/five-day-weather.page';


@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    EnterZipcodeComponent,
    DetailWeatherComponent,
    FiveDayWeatherComponent,
    DetailWeatherPage,
    FiveDayWeatherPage
  ],
  providers: [ZipcodeService, OpenWeatherService, FiveDayWeatherResolver],
  bootstrap: [AppComponent]
})
export class AppModule {}
