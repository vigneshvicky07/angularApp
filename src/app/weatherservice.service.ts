import { Injectable, Type } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherserviceService {
url = 'https://api.openweathermap.org/data/2.5/weather';
lurl = 'https://localhost:8080/gpdf';

apikey = '7091c00f5af97abcf15ed6c2a1028eef';

  constructor(private http: HttpClient) { }
                getWeatherDataByCoords( lat, lon) {
                  const params = new HttpParams()
                  .set('lat', lat)
                  .set('lon', lon)
                  .set('units', 'imperial')
                  .set('appid', this.apikey);
                  return this.http.get(this.url, {params});
                }




                getWeatherDataByCityName(city: string) {
                  const params = new HttpParams()
                  .set('q', city)
                  .set('units', 'imperial')
                  .set('appid', this.apikey);
                  // console.log(this.url);
                  return this.http.get(this.url, { params });

                }
                getpdf() {


                  // const headers = new Headers();
                  // headers.append('Content-Type', 'application/json');

                  // const options = new RequestOptions({ headers: headers});
                  // let headers = new HttpHeaders()

// console.log("clled");
                  this.http.get(this.lurl);

                }
}
