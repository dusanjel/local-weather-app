import { Component, OnInit } from '@angular/core';
import { ICurrentWeather } from '../interfaces';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {
  current: ICurrentWeather;
  constructor() {
    this.current = {
      city: 'Beograd',
      country: 'Serbia',
      date: new Date(),
      description: 'sunny',
      image: 'assets/img/sunny.png',
      temperature: 72
    } as ICurrentWeather;
  }

  ngOnInit() {
  }

}
