import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Observable} from 'rxjs/Observable' ;
import {WeatherProvider} from '../../providers/weather/weather' ;
import {map} from 'rxjs/operators';
import {LocationWeatherPage} from '../../pages/location-weather/location-weather' ;
import { ModalController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // initiates the variables
      city ;
      country ;
      maxDurban;
      minDurban;
      minPretoria;
      maxPretoria;
      minCapeTown ;
      maxCapeTown;
      minPolokwane;
      maxPolokwane;
      minRustenburg ;
      maxRustenburg ;
      minBloemfontein ;
      maxBloemfontein ;
      minMahikeng ;
      maxMahikeng ;
      minKimberly ;
      maxKimberly ;
      minNelspruit ;
      maxNelspruit ;
      minJozi ;
      maxJozi ;

     //this initiates the constructor to attain current deafult weather..
        constructor(public navCtrl: NavController,
              public myWeatherProvider : WeatherProvider,
              public modalCtrl: ModalController,) {
                this.myWeatherProvider.getJoziWeather().then((data : any) => {
                    this.minJozi = (data.main.temp_min - 273.15).toFixed();
                    this.maxJozi = (data.main.temp_max - 273.15).toFixed();
                })
                this.myWeatherProvider.getPretoriaWeather().then((data : any) => {
                  this.minPretoria = (data.main.temp_min - 273.15).toFixed();
                  this.maxPretoria = (data.main.temp_max - 273.15).toFixed();
                })
                this.myWeatherProvider.getCapeTownWeather().then((data : any) => {
                  this.minCapeTown = (data.main.temp_min - 273.15).toFixed();
                  this.maxCapeTown = (data.main.temp_max - 273.15).toFixed();
                })
                this.myWeatherProvider.getDurbanWeather().then((data:any) => {
                 this.minDurban = (data.main.temp_min - 273.15).toFixed();
                  this.maxDurban =  (data.main.temp_max - 273.15).toFixed();
                })
                this.myWeatherProvider.getPolokwaneWeather().then((data : any) => {
                  this.minPolokwane = (data.main.temp_min - 273.15).toFixed();
                  this.maxPolokwane = (data.main.temp_max - 273.15).toFixed(); 
                })
                this.myWeatherProvider.getRustenburgWeather().then((data :any) => {
                  this.minRustenburg = (data.main.temp_min - 273.15).toFixed();
                  this.maxRustenburg = (data.main.temp_max - 273.15).toFixed();
                })
                this.myWeatherProvider.getBloemfonteinWeather().then((data : any) => {
                  this.minBloemfontein = (data.main.temp_min -273.15).toFixed();
                  this.maxBloemfontein = (data.main.temp_max - 273.15).toFixed();
                })
                this.myWeatherProvider.getMafikengWeather().then((data : any) => {
                  this.minMahikeng = (data.main.temp_min - 273.15).toFixed();
                  this.maxMahikeng = (data.main.temp_max - 273.15).toFixed();
                })
                this.myWeatherProvider.getKimberlyWeather().then((data : any) => {
                  this.minKimberly = (data.main.temp_min - 273.15).toFixed();
                  this.maxKimberly = (data.main.temp_max - 273.15).toFixed();
                })
                this.myWeatherProvider.getNelspruitWeather().then((data : any) => {
                  this.minNelspruit = (data.main.temp_min - 273.15).toFixed();
                  this.maxNelspruit = (data.main.temp_max - 273.15).toFixed();
                })
            }
            // variables used to store values
              nameObject:any;
              myMainObject:any;
              weatherObject : any;  
              min_temp;
              max_temp;
              weatherDescription:string ;
              returnedCityName ;
              celciusTemperature  ;
              icon;
              newWeatherArr = [];
                  // this initiates the method to get the weather from the API
                    viewWeather(){
                      // fetch values from the API
                      this.myWeatherProvider.getWeather(this.city).then((data:any) =>{
                        console.log(data);
                        // this ttains data fromn the objects
                          this.myMainObject = data.main;
                          this.weatherObject = data.weather;
                          this.nameObject = data.name ;
                          this.min_temp = this.myMainObject.temp_min;
                          this.max_temp = this.myMainObject.temp_max;
                      //myWeatherList= data.weather;
                          this.returnedCityName = data.name;
                      //calculates and converts the temperature
                          this.celciusTemperature = (this.max_temp - 273.15).toFixed(2) ; 
                      // creates an object that will store the weather detaiils for the selected user city
                          let myWeatherInformation = new myWeatherInfo(this.returnedCityName, this.celciusTemperature,this.min_temp,this.max_temp)
                          let x : any = myWeatherInformation ;
                          myWeatherList.push(x);
                          console.log(x);
                      // displays the modal to view trhe user requested weather details
                          const modal = this.modalCtrl.create(LocationWeatherPage);
                          modal.present();
                      })
                    }

                  }
                  // initiates the class that will store the details that needs to be displayed
                  export class myWeatherInfo {
                    returnedCityName ;
                    celciusTemperature ;
                    min_temp ;
                    max_temp ;
                    // the constructor initiates the values in the class
                    constructor (returnedCityName,celciusTemperature,min_temp ,max_temp){
                      this.returnedCityName = returnedCityName ;
                      this.celciusTemperature = celciusTemperature ;
                      this.max_temp = max_temp ;
                      this.min_temp = min_temp ;
                    }
                  }

                  // initiates the array
                    var myWeatherList = [];
                  // exports the array to other paths or pages
                    export default myWeatherList

