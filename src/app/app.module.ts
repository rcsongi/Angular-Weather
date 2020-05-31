import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule, matFormFieldAnimations} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms';
import { MainPageComponent } from './main-page/main-page.component';
import {MatListModule} from '@angular/material/list';
import { HttpClientModule }    from '@angular/common/http';
import {MatSnackBarModule, matSnackBarAnimations} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { WeatherDetailComponent } from './weather-detail/weather-detail.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CommonModule } from '@angular/common';
import {CityAddModuleComponent} from './city-add-module/city-add-module.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainPageComponent,
    WeatherDetailComponent,
    CityAddModuleComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    AppRoutingModule,
    FormsModule,
    MatListModule,
    HttpClientModule,
    MatSnackBarModule,
    MatIconModule,
    MatDialogModule,
    NgxChartsModule,
    CommonModule,
   
    
    
   
    
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
