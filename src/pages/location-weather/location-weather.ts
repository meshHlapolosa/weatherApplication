import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { importType } from '@angular/compiler/src/output/output_ast';
import myWeatherList, { myWeatherInfo } from '../home/home' ;

/**
 * Generated class for the LocationWeatherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-location-weather',
  templateUrl: 'location-weather.html',
})
export class LocationWeatherPage {
  userCityName ;
  userTemperature   ;
  userMinimumTemperature ;
  myObject = this.navParams.get('myObject') ;

  celciusTemperature = myWeatherList[0].celciusTemperature;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public viewCtrl : ViewController) {

                console.log(this.celciusTemperature);
  }

  ionViewDidLoad() {
      this.userCityName = myWeatherList[0].returnedCityName;
      this.userTemperature = Math.round(myWeatherList[0].celciusTemperature) + "ºc";
      
      ;
  }

  closeModal(){
    this.viewCtrl.dismiss();

  }

}

