import { Component, OnInit } from '@angular/core';
import {Uservalues} from './uservalues';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  userModel = new Uservalues('name', 21678346, 'something@gmail.com', 'notes');


  constructor(
  ) {}

  ngOnInit() {
  }

}
