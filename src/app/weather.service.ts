import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cityfull, CityList } from './Cityfull';
import { Observable, of } from 'rxjs';
import { WeatherDay } from './wether-days';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  private weatherKey = '561a9eb47c117ba4294a88501d4ec35f';
  private getbyid = "api.openweathermap.org/data/2.5/weather?id="

  getcitybyid(id: number): Observable<Cityfull>{
    return this.http.get<Cityfull>(`http://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${this.weatherKey}`);
      
  }
  getcitybyids(id: number[]): Observable<CityList>{
    return this.http.get<CityList>(`http://api.openweathermap.org/data/2.5/group?id=${id}&appid=${this.weatherKey}`);
      
  }
 

  getWeatherByName (id: number): Observable<WeatherDay> {

    return this.http.get<WeatherDay>(`http://api.openweathermap.org/data/2.5/forecast?id=${id}&appid=${this.weatherKey}`);

  }

  searchCity(name: string): Observable<Cityfull> {
    if(!name.trim()){
      return of();
    }
    return this.http.get<Cityfull>(`http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${this.weatherKey}`);
  }

 

}

