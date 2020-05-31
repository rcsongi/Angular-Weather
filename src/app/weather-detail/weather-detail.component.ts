import { Component, OnInit, Input } from '@angular/core';
import { Forecast,  } from '../forecast';
import { SimpleCity } from '../city';

import { element } from 'protractor';

@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.css']
})

export class WeatherDetailComponent implements OnInit {

  @Input() forecast: Forecast[];
  @Input() current: SimpleCity;
  width: number;
  height: number;
  isset: boolean = false;
  direct: string;

  multi: any[] ;

  view: any[] = [this.width, this.height];

  // options
  legend: boolean = false;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Days';
  yAxisLabel: string = 'Temperature [C]';
  timeline: boolean = true;
  roundDomains: boolean = true;
  
  colorScheme = {
    domain: ['#9400d3']
    
  };

  constructor() {
    
  }

  ngOnInit(): void {
    this.width = document.getElementById('card').offsetWidth;
    this.height = document.getElementById('card').offsetHeight;
    this.view = [this.width - 50, this.height];

    if(this.current.windDirect < 23 || this.current.windDirect >= 342) this.direct="N";
    if(this.current.windDirect < 342 && this.current.windDirect >= 297) this.direct="NW";
    if(this.current.windDirect < 297 && this.current.windDirect >= 252) this.direct="W";
    if(this.current.windDirect < 252 && this.current.windDirect >= 207) this.direct="SW";
    if(this.current.windDirect < 207 && this.current.windDirect >= 162) this.direct="S";
    if(this.current.windDirect < 162 && this.current.windDirect >= 117) this.direct="SE";
    if(this.current.windDirect < 117 && this.current.windDirect >= 72) this.direct="E";
    if(this.current.windDirect < 72 && this.current.windDirect >= 24) this.direct="NE";

    
    
  }

}
