import { Component } from '@angular/core'
import { CurrentWeather } from '../models/currentweather.model'
import { WeatherService } from '../services/weather.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [WeatherService]
})
export class AppComponent {
  searchQuery: string = ""
  errMsg: string = ""
  currentWeather: CurrentWeather = new CurrentWeather

  constructor(private weatherService: WeatherService) { }

  getCurrentWeather(searchQuery: string): void {
    this.weatherService.getCurrentWeather(searchQuery).subscribe((data) => {
      this.currentWeather = new CurrentWeather().deserialize(data)
      this.searchQuery = ""
      this.errMsg = ""
    }, () => {
      this.errMsg = "Results could not be found!"
    })
  }
}
