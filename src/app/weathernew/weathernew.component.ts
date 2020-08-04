import { Component, OnInit } from '@angular/core';
import { WeatherserviceService } from '../weatherservice.service';


@Component({
  selector: 'app-weathernew',
  templateUrl: './weathernew.component.html',
  styleUrls: ['./weathernew.component.css']
})
export class WeathernewComponent implements OnInit {
lat;
lon;
weather;
maptype = 'satellite';
  constructor(private weatherservice: WeatherserviceService) { }

  ngOnInit() {
    this.getLocation();
  }
  getLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.watchPosition((gdata) => {
        this.lat = gdata.coords.latitude;
        this.lon = gdata.coords.longitude;
        this.weatherservice.getWeatherDataByCoords(this.lat, this.lon).subscribe(data => {
this.weather = data;
        });
      });
    }
  }

  getcity(city) {
    console.log('nameee', city);
    this.weatherservice.getWeatherDataByCityName(city).subscribe(data => {
      console.log('hello', data);
      this.weather = data;
      console.log('before', this.weather.main);
      console.log('weather', this.weather.main.humidity);
      // this.lat = this.weather.coord.lat;
      // this.lon = this.weather.coord.lon;

    });



  }
  generatepdf() {
    this.weatherservice.getpdf();
    // .subscribe(data => {
    //   console.log(data);
    // });
  }

}
