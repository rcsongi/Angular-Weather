import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Observable, Subject } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
import {Cityfull} from '../Cityfull'
import {WeatherService} from '../weather.service';
import { User } from '../user';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-city-add-module',
  templateUrl: './city-add-module.component.html',
  styleUrls: ['./city-add-module.component.css']
})


export class CityAddModuleComponent implements OnInit {

  currentUser: User;

  newCity: Cityfull;
  private searchTerms = new Subject<string>();



  constructor(public dialog: MatDialogRef<CityAddModuleComponent>, private weathersevice: WeatherService, private snackbar: MatSnackBar
    ) { }

  search(term: string): void {
    this.weathersevice.searchCity(term).subscribe(city => {
     
        if (!this.currentUser.ids.includes(city.id)){
          if(this.currentUser.ids.length < 10) {
            this.currentUser.ids.push(city.id);
            localStorage.setItem(this.currentUser.name, JSON.stringify(this.currentUser));
            this.dialog.close();
          }
          else this.snackbar.open("You can only have 10 City in your app.")._dismissAfter(3000);
        }
        else this.snackbar.open("City already added")._dismissAfter(3000);
    
    
    }, 
    error => {
      this.snackbar.open(error.error.message)._dismissAfter(3000);
      
    }
      );
      
    
  }

  ngOnInit(): void {

    this.currentUser = JSON.parse(localStorage.getItem(localStorage.getItem("currentUser")));
  }

}
