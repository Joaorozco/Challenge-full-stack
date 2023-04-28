import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  view: [number, number] = [500, 200];
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = false;
  xAxisLabel = 'Country';
  showYAxisLabel = false;
  yAxisLabel = 'Population';


  single = [
    {
      "name": "Germany",
      "value": 10.000
    },
    {
      "name": "USA",
      "value": 5000
    },
    {
      "name": "France",
      "value": 720
    }
  ];

  constructor() {

  }

  onSelect(event: any) {
    console.log(event);
  }

  ngOnInit(): void {
  }

}
