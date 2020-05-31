import { Component, OnInit , Inject} from '@angular/core';

import { WeatherService } from '../weather.service'
import { SimpleCity } from '../city';
import { Cityfull } from '../Cityfull';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CityAddModuleComponent } from '../city-add-module/city-add-module.component';
import { Forecast } from '../forecast';
import { WeatherDetailComponent } from '../weather-detail/weather-detail.component';
import { stringify } from '@angular/compiler/src/util';
import { element } from 'protractor';
import { pipe, concat } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { Route } from '@angular/compiler/src/core';
import { style } from '@angular/animations';
import { isNull } from 'util';
import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';


export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  currentUser: User;
  i: number;
  temperature = "Temperature";
  cities: SimpleCity[];
  new_city: SimpleCity;
  forecastCity: Forecast;
  details: Forecast[]
  selectedCity: SimpleCity;
  bakcgroundStorm = "../../assets/strom.jpg";
  bakcgroundclouds = "../../assets/clouds.jpg";

  constructor(private weatherService: WeatherService, public dialog: MatDialog, private router: Router) { }

  add(): void{
    
    const dialogRef = this.dialog.open(CityAddModuleComponent, {
      width: '1500px',
      data: {}
    });
    dialogRef.afterClosed().subscribe( res => {
      this.ngOnInit();
    });   
  }
  displayCities() {
    this.cities = [];
    this.weatherService.getcitybyids(this.currentUser.ids).subscribe(cities => {
      for(let city of cities.list){
        
        this.cities.push({
          id: city.id,
          name: city.name,
          windSpeed: city.wind.speed,
          windDirect: city.wind.deg ,
          temp: (city.main.temp - 273.5).toFixed(2),
          pressure: city.main.pressure,
          humid: city.main.humidity,
          cloud: city.clouds.all
        });
      }
      this.detail(this.cities[0]);
    })
}
  detail(city: SimpleCity) {
  
   if(this.selectedCity !== city)  {
     this.selectedCity = null;
    this.details = [];
   }
    let i = 0;
  
    this.weatherService.getWeatherByName(city.id).subscribe(nextFiveDay =>{
      this.forecastCity = new(Forecast);
      this.forecastCity.series = [];
      this.forecastCity.name = city.name;
      for(let fe of nextFiveDay.list){
        
       this.forecastCity.series.push( {
         name: fe.dt_txt.slice(8,13).concat("h") ,
         value: fe.main.temp - 273.5,
        
       });
      }   
   
  this.details [0] = this.forecastCity; 
  this.selectedCity = city;
    
    } );
    
  }
  logOut(){
    localStorage.setItem("currentUser", "");
    this.router.navigateByUrl('/login');
  }
  
  delete(city: SimpleCity) {
    
    this.currentUser.ids.forEach( (item, index) => {
     
      if(item == city.id) {
        this.currentUser.ids.splice(index, 1);
        
      }
    })
    
    localStorage.setItem(this.currentUser.name, JSON.stringify(this.currentUser));
    this.ngOnInit();
  }
  ngOnInit(): void { 
  this.currentUser = JSON.parse(localStorage.getItem(localStorage.getItem("currentUser")));

  this.selectedCity = null;
  this.displayCities();
  var element = document.getElementsByClassName("city-card");
  document.addEventListener
  
}
}

