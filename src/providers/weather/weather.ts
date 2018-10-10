import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {HomePage} from '../../pages/home/home';
/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherProvider {
  // this initiates the variables to store values
    private myAppId = '61c508535b2113cf83b7774c2ac552e2' ;
  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
  }

  getWeather(strCityName){
    let newBaseUrl = 'http://api.openweathermap.org/data/2.5/weather?q='+ strCityName + ','+'southafrica&appid=61c508535b2113cf83b7774c2ac552e2' ;
    return new Promise ((resolve , reject) => {
      this.http.get(newBaseUrl).subscribe((data:any) => {
        resolve(data);
      })
    })
  }
  // this method get the current johannesburg weather
 getJoziWeather(){
    let newBaseUrl = 'http://api.openweathermap.org/data/2.5/weather?q=johannesburg,southafrica&appid=61c508535b2113cf83b7774c2ac552e2' ;
    return new Promise ((resolve , reject) => {
      this.http.get(newBaseUrl).subscribe((data:any) => {
        resolve(data);
      })
    })
  }  
   // this method get the current Pretoria weather
  getPretoriaWeather(){
    let newBaseUrl = 'http://api.openweathermap.org/data/2.5/weather?q=pretoria,southafrica&appid=61c508535b2113cf83b7774c2ac552e2' ;
    return new Promise ((resolve , reject) => {
      this.http.get(newBaseUrl).subscribe((data:any) => {
        resolve(data);
      })
    })
  }  
   // this method get the current cape town weather
  getCapeTownWeather(){
    let newBaseUrl = 'http://api.openweathermap.org/data/2.5/weather?q=cape town,southafrica&appid=61c508535b2113cf83b7774c2ac552e2' ;
    return new Promise ((resolve , reject) => {
      this.http.get(newBaseUrl).subscribe((data:any) => {
        resolve(data);
      })
    })
  }  
   // this method get the current durban weather
  getDurbanWeather(){
    let newBaseUrl = 'http://api.openweathermap.org/data/2.5/weather?q=durban,southafrica&appid=61c508535b2113cf83b7774c2ac552e2' ;
    return new Promise ((resolve , reject) => {
      this.http.get(newBaseUrl).subscribe((data:any) => {
        resolve(data);
      })
    })
  }  
   // this method get the current polokwane weather
  getPolokwaneWeather(){
    let newBaseUrl = 'http://api.openweathermap.org/data/2.5/weather?q=polokwane,southafrica&appid=61c508535b2113cf83b7774c2ac552e2' ;
    return new Promise ((resolve , reject) => {
      this.http.get(newBaseUrl).subscribe((data:any) => {
        resolve(data);
      })
    })
  }  
   // this method get the current Rustenburg weather
  getRustenburgWeather(){
    let newBaseUrl = 'http://api.openweathermap.org/data/2.5/weather?q=rustenburg,southafrica&appid=61c508535b2113cf83b7774c2ac552e2' ;
    return new Promise ((resolve , reject) => {
      this.http.get(newBaseUrl).subscribe((data:any) => {
        resolve(data);
      })
    })
  }  
   // this method get the current bloemfontein weather
  getBloemfonteinWeather(){
    let newBaseUrl = 'http://api.openweathermap.org/data/2.5/weather?q=bloemfontein,southafrica&appid=61c508535b2113cf83b7774c2ac552e2' ;
    return new Promise ((resolve , reject) => {
      this.http.get(newBaseUrl).subscribe((data:any) => {
        resolve(data);
      })
    })
  }  
   // this method get the current mafikeng weather
  getMafikengWeather(){
    let newBaseUrl = 'http://api.openweathermap.org/data/2.5/weather?q=mafikeng,southafrica&appid=61c508535b2113cf83b7774c2ac552e2' ;
    return new Promise ((resolve , reject) => {
      this.http.get(newBaseUrl).subscribe((data:any) => {
        resolve(data);
      })
    })
  }  
   // this method get the current kimberyly weather
  getKimberlyWeather(){
    let newBaseUrl = 'http://api.openweathermap.org/data/2.5/weather?q=kimberly,southafrica&appid=61c508535b2113cf83b7774c2ac552e2' ;
    return new Promise ((resolve , reject) => {
      this.http.get(newBaseUrl).subscribe((data:any) => {
        resolve(data);
      })
    })
  }  
   // this method get the current nelspruit weather
  getNelspruitWeather(){
    let newBaseUrl = 'http://api.openweathermap.org/data/2.5/weather?q=nelspruit,southafrica&appid=61c508535b2113cf83b7774c2ac552e2' ;
    return new Promise ((resolve , reject) => {
      this.http.get(newBaseUrl).subscribe((data:any) => {
        resolve(data);
      })
    })

  } 
}

