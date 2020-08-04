import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// import { AppRoutingModule, routingcomponent} from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TopnavComponent } from './topnav/topnav.component';
import { TopcontentComponent } from './topcontent/topcontent.component';
import { SecondnavComponent } from './secondnav/secondnav.component';
import { FirstblogComponent } from './firstblog/firstblog.component';
import { DetailsComponent } from './details/details.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { ProductComponent } from './product/product.component';
import { ClientsComponent } from './clients/clients.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { TimelineComponent } from './timeline/timeline.component';
import { CuroselComponent } from './curosel/curosel.component';
import { WeatherComponent } from './weather/weather.component';
import { HttpClientModule } from '@angular/common/http';
import { WeathernewComponent } from './weathernew/weathernew.component';
import { AgmCoreModule } from '@agm/core';


const appRoutes: Routes = [
  { path: 'topnav', component: WeatherComponent }
];
@NgModule({
  declarations: [
    AppComponent,
// routingcomponent,
TopnavComponent,
TopcontentComponent,
SecondnavComponent,
FirstblogComponent,
DetailsComponent,
ProductComponent,
ClientsComponent,
ServicesComponent,
ContactComponent,
TimelineComponent,
CuroselComponent,
WeatherComponent,
WeathernewComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    FormsModule, NgbModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    HttpClientModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD5wk_oTcMXN3mQ3VmAhMpBVuUDt5VqXEA'

      // apiKey: 'AIzaSyAvcDy5ZYc2ujCS6TTtI3RYX5QmuoV8Ffw'

    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
