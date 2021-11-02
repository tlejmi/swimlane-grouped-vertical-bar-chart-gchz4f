import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
//import { multiData } from './newData';
import * as SampleJson from './file.json';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  multiData: any;

  //multi: any[] = multiData.data;
  multi: any = SampleJson.data;
  view: any[] = [700, 400];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = true;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = SampleJson.name;
  showYAxisLabel: boolean = true;
  yAxisLabel: string = 'Nombre Equipement';
  legendTitle: string = 'Years';
  showleagend: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#C7B42C', '#AAAAAA', '#C7B42C'],
  };

  constructor() {}

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
