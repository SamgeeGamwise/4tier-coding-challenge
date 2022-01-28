import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  weatherUrl: string = `https://api.openweathermap.org/data/2.5/weather?appid=${environment.APIKey}`

  constructor(private http: HttpClient) { }

  getCurrentWeather(searchQuery: string): Observable<Object> {
    return this.http.get(this.weatherUrl + `&q=${searchQuery}` + `&units=imperial`)
  }
}
