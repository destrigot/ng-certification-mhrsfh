import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { EnterZipcodeComponent } from './components/enter-zipcode/enter-zipcode.component';
import { ZipcodeService } from './services/zipcode.service';
import { DetailWeatherComponent } from './components/detail-weather/detail-weather.component';
import { OpenWeatherService } from './services/open-weather.service';
import { HttpClientModule } from '@angular/common/http';
import { appRoutes } from './app.rounting';
import { RouterModule } from '@angular/router';
import { FiveDayWeatherComponent } from './components/five-day-weather/five-day-weather.component';
import { DetailWeatherPage } from './pages/detail-weather/detail-weather.page';

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
    HelloComponent,
    EnterZipcodeComponent,
    DetailWeatherComponent,
    FiveDayWeatherComponent,
    DetailWeatherPage
  ],
  providers: [ZipcodeService, OpenWeatherService],
  bootstrap: [AppComponent]
})
export class AppModule {}
