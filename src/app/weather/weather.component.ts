import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { from } from 'rxjs';
import { FormControl, ReactiveFormsModule} from '@angular/forms';
import {Value} from './value';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})

export class WeatherComponent implements OnInit {
constructor(private http: HttpClient) { }

  uservalues = new Value('');
  // var name:string = "John";
  public data: any;
 city = new FormControl('');


    public hai: any;

  ngOnInit() {
  }
  getvalue(val) {
    this.data = val;
    // console.log(this.name)
    console.log('haiii ', val);
    this.hai = 'hello';


    // tslint:disable-next-line: max-line-length
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?lat=76.966667&lon=11&appid=7091c00f5af97abcf15ed6c2a1028eef', {}).toPromise().then((result) => {

      console.log(result);
      this.hai = result;

  }).catch((err) => {

    });
  }

}
