import { Component, OnInit } from '@angular/core';
import { WeatherComponent } from '../weather/weather.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
