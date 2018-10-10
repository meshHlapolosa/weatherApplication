import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LocationWeatherPage } from './location-weather';

@NgModule({
  declarations: [
    LocationWeatherPage,
  ],
  imports: [
    IonicPageModule.forChild(LocationWeatherPage),
  ],
})
export class LocationWeatherPageModule {}
